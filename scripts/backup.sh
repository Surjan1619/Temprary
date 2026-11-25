#!/bin/sh
# Резервная копия базы и загруженных фото. Запускается в контейнере `backup`
# (см. docker-compose.yml):
#   backup.sh         — одна копия и выход (ручной запуск)
#   backup.sh --loop  — копия сразу и затем каждые BACKUP_INTERVAL_HOURS часов
#
# Файлы кладутся в /backups (на хосте это папка ./backups):
#   db-ГГГГММДД-ЧЧММСС.dump        — pg_dump в формате custom (восстанавливается pg_restore)
#   uploads-ГГГГММДД-ЧЧММСС.tar.gz — содержимое тома с загруженными фото
# Копии старше BACKUP_KEEP_DAYS дней удаляются.
set -eu

BACKUP_DIR=/backups
UPLOADS_DIR=/uploads
KEEP_DAYS="${BACKUP_KEEP_DAYS:-14}"
INTERVAL_HOURS="${BACKUP_INTERVAL_HOURS:-24}"

log() { echo "[backup $(date '+%Y-%m-%d %H:%M:%S')] $*"; }

backup_once() {
  stamp=$(date '+%Y%m%d-%H%M%S')
  db_file="$BACKUP_DIR/db-$stamp.dump"
  up_file="$BACKUP_DIR/uploads-$stamp.tar.gz"

  # Пишем во временный файл и переименовываем только при успехе,
  # чтобы в папке никогда не лежала оборванная копия.
  pg_dump -h db -U "$POSTGRES_USER" -d "$POSTGRES_DB" -Fc -f "$db_file.part"
  mv "$db_file.part" "$db_file"

  tar -czf "$up_file.part" -C "$UPLOADS_DIR" .
  mv "$up_file.part" "$up_file"

  log "готово: $(basename "$db_file") ($(du -h "$db_file" | cut -f1)), $(basename "$up_file") ($(du -h "$up_file" | cut -f1))"

  find "$BACKUP_DIR" -maxdepth 1 \( -name 'db-*.dump' -o -name 'uploads-*.tar.gz' \) -mtime "+$KEEP_DAYS" -print -delete \
    | sed 's/^/[backup] удалена старая копия: /'
  find "$BACKUP_DIR" -maxdepth 1 -name '*.part' -mmin +60 -delete
}

mkdir -p "$BACKUP_DIR"

if [ "${1:-}" != "--loop" ]; then
  backup_once
  exit 0
fi

log "автоматические копии каждые $INTERVAL_HOURS ч, хранятся $KEEP_DAYS дн."
while true; do
  # Ошибка одной копии (например, база перезапускается) не должна останавливать расписание.
  backup_once || log "ОШИБКА: копия не создана, следующая попытка через $INTERVAL_HOURS ч"
  sleep "$((INTERVAL_HOURS * 3600))"
done

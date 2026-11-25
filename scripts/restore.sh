#!/bin/sh
# Восстановление из резервной копии (запускать на сервере из папки проекта).
#
#   scripts/restore.sh backups/db-20261123-030000.dump
#   scripts/restore.sh backups/db-20261123-030000.dump backups/uploads-20261123-030000.tar.gz
#
# ВНИМАНИЕ: текущие товары в базе (и фото, если указан архив) будут заменены
# содержимым копии. На время восстановления сайт останавливается.
#
# Для другого имени проекта или env-файла задайте COMPOSE, например:
#   COMPOSE="docker compose -p myproj --env-file /path/.env" scripts/restore.sh ...
set -eu

COMPOSE="${COMPOSE:-docker compose}"
DB_DUMP="${1:-}"
UPLOADS_TAR="${2:-}"

if [ -z "$DB_DUMP" ]; then
  echo "Использование: $0 <db-....dump> [uploads-....tar.gz]" >&2
  exit 1
fi
for f in "$DB_DUMP" ${UPLOADS_TAR:+"$UPLOADS_TAR"}; do
  [ -f "$f" ] || { echo "Файл не найден: $f" >&2; exit 1; }
done

echo "Будут восстановлены:"
echo "  база данных  <- $DB_DUMP"
[ -n "$UPLOADS_TAR" ] && echo "  фото         <- $UPLOADS_TAR"
echo "Текущие данные будут заменены. Сайт будет остановлен на время восстановления."
if [ "${RESTORE_YES:-}" != "1" ]; then
  printf 'Продолжить? Введите yes: '
  read -r answer
  [ "$answer" = "yes" ] || { echo "Отменено."; exit 1; }
fi

echo "-> останавливаю сайт"
$COMPOSE stop web

echo "-> восстанавливаю базу"
# --clean --if-exists: удалить таблицы из копии перед созданием заново;
# --single-transaction: при ошибке база остаётся как была.
$COMPOSE exec -T db sh -c \
  'pg_restore --clean --if-exists --no-owner --single-transaction -U "$POSTGRES_USER" -d "$POSTGRES_DB"' \
  < "$DB_DUMP"

if [ -n "$UPLOADS_TAR" ]; then
  echo "-> восстанавливаю фото"
  $COMPOSE run --rm --no-deps -T --entrypoint sh web -c \
    'find /app/uploads -mindepth 1 -delete && tar -xzf - -C /app/uploads' \
    < "$UPLOADS_TAR"
fi

echo "-> запускаю сайт"
$COMPOSE start web
echo "Готово."

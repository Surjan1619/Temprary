// Безопасный доступ к localStorage. В приватном режиме, при запрете cookies
// или во встроенных браузерах обращение к localStorage может бросить исключение —
// тогда просто ничего не сохраняем, а сайт продолжает работать.

export function readStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // хранилище недоступно или переполнено — настройка просто не запомнится
  }
}

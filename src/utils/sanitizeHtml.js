import DOMPurify from 'dompurify';

// Описание товара пишется в админке как HTML. Перед выводом оставляем только
// безопасную разметку: никаких скриптов, обработчиков событий и стилей.
const OPTIONS = {
  ALLOWED_TAGS: ['div', 'p', 'h3', 'h4', 'strong', 'b', 'em', 'i', 'br', 'ul', 'ol', 'li', 'a'],
  ALLOWED_ATTR: ['href', 'target', 'rel'],
};

DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName === 'A' && node.getAttribute('target') === '_blank') {
    node.setAttribute('rel', 'noopener noreferrer');
  }
});

export function sanitizeHtml(html) {
  return DOMPurify.sanitize(html || '', OPTIONS);
}

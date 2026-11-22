export const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/digitaldoor.am/' },
  { name: 'Facebook', url: 'https://www.facebook.com/digitaldooram/' },
  { name: 'YouTube', url: 'https://www.youtube.com/@doordigital-k' },
];

// Контакты компании — единственное место, где они заданы.
export const contacts = {
  phone: '+37433505022',
  phoneDisplay: '+374 33 50 50 22',
  email: 'digitaldooram@gmail.com',
  // Номер WhatsApp в международном формате без «+» (например '37433505022').
  // Пока пусто, кнопки заявки звонят по телефону. Если задать — открывают WhatsApp
  // с готовым текстом заявки.
  whatsapp: '',
};

export const phoneHref = `tel:${contacts.phone}`;
export const emailHref = `mailto:${contacts.email}`;

/**
 * Атрибуты ссылки для кнопок «Оставить заявку» / «Заказать» / «Бесплатный замер».
 * @param {string} message текст заявки для WhatsApp (на звонок не влияет)
 */
export function requestLinkProps(message) {
  if (contacts.whatsapp) {
    const text = message ? `?text=${encodeURIComponent(message)}` : '';
    return {
      href: `https://wa.me/${contacts.whatsapp}${text}`,
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }
  return { href: phoneHref };
}

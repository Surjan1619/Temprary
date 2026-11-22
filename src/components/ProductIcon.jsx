import { iconMap } from '../data/iconMap.js';

/** Иконка товара по ключу; неизвестный ключ не роняет страницу. */
export default function ProductIcon({ name }) {
  const Icon = iconMap[name] || iconMap.sectional;
  return <Icon />;
}

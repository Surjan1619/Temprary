const brandLogos = {
  alutech: '/images/alutech.svg',
  mba: '/images/mba.avif',
};

export function getBrandLogo(brand) {
  return brandLogos[brand] || null;
}

export default brandLogos;

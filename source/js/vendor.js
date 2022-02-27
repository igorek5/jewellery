/* global Swiper */
/* Swiper 7.4.1 */

import './vendor/swiper';

const slider = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: true,
  slidesPerGroup: 4,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});

slider();

/* global Swiper */
/* Swiper 7.4.1 */

export const initSwiper = () => {
  const slider = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
      nextEl: '.slider__button--next',
      prevEl: '.slider__button--prev',
    },
    breakpoints: {
      320: {
        observer: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          clickable: true,
          renderFraction: (currentClass, totalClass) => {
            return '<span class="' + currentClass + '"></span>' +
              '&nbsp;&nbsp;of&nbsp;&nbsp;' +
              '<span class="' + totalClass + '"></span>';
          },
        },
      },
      768: {
        observer: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: (index, className) => {
            return '<button class="slider__pagination-bullet ' + className + '">' + (index + 1) + '</button>';
          },
        },
      },
      1024: {
        observer: true,
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: (index, className) => {
            return '<button class="slider__pagination-bullet ' + className + '">' + (index + 1) + '</button>';
          },
        },
      },
    },
  });
  return slider;
};

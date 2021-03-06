/* global Swiper */
/* Swiper 7.4.1 */

const breakpoint = window.matchMedia('(min-width:768px)');

export const initSlider = () => {
  return new Swiper('.slider__wrapper', {
    grabCursor: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.slider__button--next',
      prevEl: '.slider__button--prev',
    },
    breakpoints: {
      320: {
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
};

const breakpointChecker = () => {
  initSlider();
};

export const initSwiper = () => {
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

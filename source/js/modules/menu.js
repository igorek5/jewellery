const pageHeader = document.querySelector('.page-header');
const toggleMenu = document.querySelector('.page-header__toggle');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const menuButtonHandler = (evt) => {
  evt.preventDefault();
  pageHeader.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
};

const menuEscHandler = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    pageHeader.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }
};

export const setMenuControl = () => {
  if (!toggleMenu) {
    return;
  }
  toggleMenu.addEventListener('click', menuButtonHandler);
  document.addEventListener('keydown', menuEscHandler);
};

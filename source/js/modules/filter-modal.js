const filterButton = document.querySelector('.catalog__filter-button');
const modalFilter = document.querySelector('.filter--modal');
const modalFilterOverlay = document.querySelector('.filter__modal-overlay');
const closeFilterButton = document.querySelector('.filter__close');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';


const filterEscHandler = (evt) => {
  if (isEscEvent(evt)) {
    filterCloseHandler(evt);
  }
};

const filterOpenHandler = (evt) => {
  evt.preventDefault();
  modalFilter.classList.add('is-active');
  document.body.classList.add('filter-no-scroll');

  modalFilterOverlay.addEventListener('click', filterCloseHandler);
  closeFilterButton.addEventListener('click', filterCloseHandler);
  document.addEventListener('keydown', filterEscHandler);
};

function filterCloseHandler(evt) {
  evt.preventDefault();
  modalFilter.classList.remove('is-active');
  document.body.classList.remove('filter-no-scroll');

  modalFilterOverlay.removeEventListener('click', filterCloseHandler);
  closeFilterButton.removeEventListener('click', filterCloseHandler);
  document.removeEventListener('keydown', filterEscHandler);
}

export const initFilterModal = () => {
  if (!modalFilter) {
    return;
  }

  filterButton.addEventListener('click', filterOpenHandler);
};

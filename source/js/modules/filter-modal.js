const filterButton = document.querySelector('[data-filter="button-open"]');
const modalFilter = document.querySelector('[data-filter="modal-filter"]');
const modalFilterOverlay = document.querySelector('[data-filter="overlay-filter"]');
const closeFilterButton = document.querySelector('[data-filter="close-filter"]');

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

'use strict';

const showModalBtnNodes = document.querySelectorAll('.show-modal');
const modalNode = document.querySelector('.modal');
const overlayNode = document.querySelector('.overlay');
const closeModalBtnNode = document.querySelector('.close-modal');

for (let showModalBtn of showModalBtnNodes) {
  showModalBtn.addEventListener('click', handleModalOpen);
}

closeModalBtnNode.addEventListener('click', handleModalClose);
overlayNode.addEventListener('click', handleModalClose);

function handleModalOpen() {
  overlayNode.classList.remove('hidden');
  modalNode.classList.remove('hidden');
}

function handleModalClose() {
  overlayNode.classList.add('hidden');
  modalNode.classList.add('hidden');
}

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  console.log(event.key, modalNode.classList);
  if (event.key === 'Escape' && !modalNode.classList.contains('hidden')) {
    handleModalClose();
  }
}

let modalWrapper = document.querySelector('.modal');
let modalOverlay = document.querySelector('.overlay');
let closeModalBtn = document.querySelector('.modal-close-btn');

let body = document.querySelector('body');

export function openModal() {
  modalWrapper.classList.add('active');
  modalOverlay.classList.add('active');
  body.style.overflow = 'hidden';
}

function closeModal() {
  modalWrapper.classList.remove('active');
  modalOverlay.classList.remove('active');
  body.style.overflow = 'auto';
}

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
document.body.addEventListener('keyup', function (e) {
  const key = e.keyCode;

  if (key === 27) {
    closeModal();
  }
});

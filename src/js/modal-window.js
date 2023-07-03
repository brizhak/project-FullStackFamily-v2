let openModalBtn = document.getElementById('openBtn');
let modalWrapper = document.querySelector('.modal');
let modalOverlay = document.querySelector('.overlay');
let closeModalBtn = document.querySelector('.modal-close-btn');

export function openModal() {
  modalWrapper.classList.add('active');
  modalOverlay.classList.add('active');
}

function closeModal() {
  modalWrapper.classList.remove('active');
  modalOverlay.classList.remove('active');
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
document.body.addEventListener('keyup', function (e) {
  const key = e.keyCode;

  if (key === 27) {
    closeModal();
  }
});

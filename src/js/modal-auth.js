
  
    // openModalBtn: document.querySelector('[data-modal-open]'),
const closeAuthModBtn = document.querySelector('[data-modal-close]');
    // const modal= document.querySelector('[data-modal]'),
  

  // refs.openModalBtn.addEventListener('click', openModal);
  closeAuthModBtn.addEventListener('click', closeModalAuth);
  const overlay = document.querySelector('.overlay');
  const modal = document.querySelector('[data-modal]');
  overlay.addEventListener('click', closeModalAuth);

function openModalAuth() {
  modal.classList.add('active');
  overlay.classList.add('active');
  }
  
function closeModalAuth() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  }
  document.body.addEventListener('keyup', function (e) {
    const key = e.keyCode;
    
    if (key === 27) {

      document.querySelector('.modal.active').classList.remove('active');
      document.querySelector('.overlay.active').classList.remove('active');
    };
  });

export { openModalAuth };
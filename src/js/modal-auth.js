
  
    // openModalBtn: document.querySelector('[data-modal-open]'),
const closeAuthModBtn = document.querySelector('.btn-modal-close');
    // const modal= document.querySelector('[data-modal]'),
  

  // refs.openModalBtn.addEventListener('click', openModal);
  closeAuthModBtn.addEventListener('click', closeModalAuth);
  const overlayAuth = document.querySelector('.overlay');
  const modalAuth = document.querySelector('[data-modal]');
  overlayAuth.addEventListener('click', closeModalAuth);

function openModalAuth() {

  modalAuth.classList.add('active');
  overlayAuth.classList.add('active');
 
  }
  
function closeModalAuth() {
  modalAuth.classList.remove('active');
  overlayAuth.classList.remove('active');
  }
  document.body.addEventListener('keyup', function (e) {
    const key = e.keyCode;
    
    if (key === 27) {

      document.querySelector('.modal.active').classList.remove('active');
      document.querySelector('.overlay.active').classList.remove('active');
    };
  });

export { openModalAuth,closeModalAuth };
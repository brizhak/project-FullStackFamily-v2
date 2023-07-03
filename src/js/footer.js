const foormFooter = document.querySelector('.footer-form');

function onFootBtn(event) {
    event.preventDefault();
    foormFooter.reset();
}

foormFooter.addEventListener('submit', onFootBtn);

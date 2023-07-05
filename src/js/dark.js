var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('theme-switch');

darkMode.addEventListener('click', function () {
    selectedColor: darkMode.classList.toggle('active')
    content.classList.toggle('night');
})
darkMode.addEventListener('change', (e) => {
    localStorage.setItem('key', dark-theme)
})

document.addEventListener('DOMContentLoaded', onload)
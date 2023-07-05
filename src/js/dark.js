var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('theme-switch');

darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})

function darkMode() {
    const wasDarkmode = localStorage.getItem('darkmode') == true

    localStorage.setItem('darkmode', !wasDarkmode)
    localStorage.toggle('active', !wasDarkmode)
}

document.addEventListener('DOMContentLoaded', onload)
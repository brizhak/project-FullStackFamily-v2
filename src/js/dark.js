var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('theme-switch');

darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('active')
    content.classList.toggle('night');
})

darkMode.addEventListener('change', function () {
    if (this.checked) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('darkMode');

    if (savedTheme === 'dark') {
        document.body.classList.add('night');
    } else {
        document.body.classList.remove('night');
    }
});
var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('theme-switch');

// darkMode.addEventListener('click', function () {
//   darkMode.classList.toggle('active');
//   content.classList.toggle('night');
// });

darkMode.addEventListener('change', function () {
  // console.log(this.checked);
  if (this.checked) {
    localStorage.setItem('darkMode', 'dark');
    darkMode.classList.add('active');
    content.classList.add('night');
  } else {
    localStorage.setItem('darkMode', 'light');
    darkMode.classList.remove('active');
    content.classList.remove('night');
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

const menu = document.querySelector('.main-navigation');
const menuBtn = document.querySelector('.main-navigation__toggle');
const body = document.querySelector('body');

if (document.querySelector('.no-js')) {
  body.classList.remove('no-js');
}

if (menuBtn) {
  menuBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    menu.classList.toggle('main-navigation--open');
  })
}

const menu = document.querySelector('.main-navigation');
const menuBtn = document.querySelector('.main-navigation__toggle');

if (menuBtn) {
  menuBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    menu.classList.toggle('main-navigation--open');
  })
}

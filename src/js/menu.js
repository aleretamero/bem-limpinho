const navbar = document.querySelector('.navbar');
const buttonMenu = document.querySelector('.button-menu');
const optionsMenu = document.querySelector('.options-menu');
const options = optionsMenu.querySelectorAll('li');

options.forEach(option => {
  option.addEventListener('click', () => {
    if (
      buttonMenu.classList.contains('active') &&
      optionsMenu.classList.contains('active')
    ) {
      buttonMenu.classList.remove('active');
      optionsMenu.classList.remove('active');
    }
  });
});

export const menu = () => {
  buttonMenu.addEventListener('click', () => {
    buttonMenu.classList.toggle('active');
    optionsMenu.classList.toggle('active');
  });

  document.addEventListener('DOMContentLoaded', menuMobile);
  window.addEventListener('resize', menuMobile);
};

const menuMobile = () => {
  if (window.innerWidth <= 768) {
    navbar.classList.add('mobile');
    optionsMenu.classList.add('mobile');
  } else {
    navbar.classList.remove('mobile');
    optionsMenu.classList.remove('mobile');
  }
};

import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal({ reset: false });

const classes = [
  '.headline-bottom',
  '.headline-service',
  '.headline-form',
  '.headline-left',
  '.headline-right',
];

classes.forEach(classe => {
  document.querySelectorAll(classe).forEach(el => {
    el.classList.add('hidden');
  });
});

const headlineToBottom = {
  delay: 50,
  duration: 2000,
  distance: '200%',
  origin: 'bottom',
  opacity: 0,
};

const headlineToleft = {
  delay: 50,
  duration: 2000,
  distance: '200%',
  origin: 'left',
  opacity: 0,
};

const headlineToRight = {
  delay: 50,
  duration: 2000,
  distance: '200%',
  origin: 'right',
  opacity: 0,
};

const headlineService = {
  delay: 150,
  duration: 3000,
  distance: '300%',
  origin: 'left',
  opacity: 0,
};

const headlineForm = {
  delay: 150,
  duration: 2000,
  distance: '20%',
  origin: 'bottom',
  opacity: 0,
};

export function scrollReveal() {
  sr.reveal('.headline-bottom', headlineToBottom);
  sr.reveal('.headline-left', headlineToleft);
  sr.reveal('.headline-right', headlineToRight);
  sr.reveal('.headline-service', headlineService);
  sr.reveal('.headline-form', headlineForm);
}

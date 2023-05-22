import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal({ reset: false });

const classes = ['.headline', '.headline-service', '.headline-form'];

classes.forEach(classe => {
  document.querySelectorAll(classe).forEach(el => {
    el.classList.add('hidden');
  });
});

const headline = {
  delay: 150,
  duration: 2000,
  distance: '200%',
  origin: 'bottom',
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
  sr.reveal('.headline', headline);
  sr.reveal('.headline-service', headlineService);
  sr.reveal('.headline-form', headlineForm)
}

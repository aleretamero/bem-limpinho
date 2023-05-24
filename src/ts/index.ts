import '../scss/styles.scss';
import VanillaTilt from 'vanilla-tilt';
import { menu } from './menu';
import { scrollReveal } from './scrollReveal';
import { observeSection } from './couter';
import { carousel } from './carousel';
import { form } from './form';

menu();
scrollReveal();
observeSection();
carousel();
form();

const cardsBenefits: NodeListOf<HTMLElement> | null =
  document.querySelectorAll('.card-benefits');
cardsBenefits.forEach(card => {
  VanillaTilt.init(card, {
    scale: 1.05,
    reverse: false,
    max: 10,
    speed: 200,
  });
});

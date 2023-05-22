import '../scss/styles.scss';
import VanillaTilt from 'vanilla-tilt';
import { menu } from './menu';
import { scrollReveal } from './scrollReveal';
import { observeSection } from './couter';

menu();
scrollReveal();
observeSection();

const cardsBenefits: NodeListOf<HTMLElement> | null =
  document.querySelectorAll('.card-benefits');
cardsBenefits.forEach(card => {
  VanillaTilt.init(card, {
    reverse: false,
    max: 10,
    speed: 200,
  });
});

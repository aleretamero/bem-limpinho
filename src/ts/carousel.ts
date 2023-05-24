const imgPrev = document.querySelector('.photo.blur:first-child');
const imgNext = document.querySelector('.photo.blur:last-child');
const imgEmphasis = document.querySelector('.photo.emphasis');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index: number = 0;
const imgs = [
  './assets/imgs-carousel/cadeiras.jpg',
  './assets/imgs-carousel/quarto.jpg',
  './assets/imgs-carousel/sofa.jpg',
  './assets/imgs-carousel/tapete.jpg',
];

function loadGallery(index = 0) {
  imgEmphasis?.setAttribute('src', imgs[index]);

  if (index === 0) {
    imgPrev?.setAttribute('src', imgs[imgs.length - 1]);
  } else {
    imgPrev?.setAttribute('src', imgs[index - 1]);
  }

  if (index === imgs.length - 1) {
    imgNext?.setAttribute('src', imgs[0]);
  } else {
    imgNext?.setAttribute('src', imgs[index + 1]);
  }
}

const upIndex = () => {
  if (index === imgs.length - 1) {
    index = 0;
  } else {
    index++;
  }
  loadGallery(index);
};

const bellowIndex = () => {
  if (index === 0) {
    index = imgs.length - 1;
  } else {
    index--;
  }
  loadGallery(index);
};

export function carousel() {
  prev?.addEventListener('click', bellowIndex);
  next?.addEventListener('click', upIndex);

  imgPrev?.addEventListener('click', bellowIndex);
  imgNext?.addEventListener('click', upIndex);

  loadGallery(index);
}

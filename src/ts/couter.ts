function counterAbout() {
  const elementsNumbersAbout: NodeListOf<HTMLElement> =
    document.querySelectorAll('.number-about span');

  elementsNumbersAbout.forEach(element => {
    counterElement(element);
  });
}

export function counterElement(element: HTMLElement) {
  if (element) {
    const number = Number(element.innerText);
    element.innerText = '';
    const time = 2500 / number;

    for (let counter = 0; counter <= number; counter++) {
      setTimeout(() => {
        element.innerText = String(counter);
      }, counter * time);
    }
  }
}

// Selecione a seção que você deseja observar
const secaoObservada = document.querySelector('.content-numbers-about');
export function observeSection() {
  // Crie uma instância do Intersection Observer
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counterAbout();
        observer.disconnect();
      }
    });
  });

  // Observe a seção
  if (secaoObservada) {
    observer.observe(secaoObservada);
  }
}

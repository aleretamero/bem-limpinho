export function form() {
  const form = document.querySelector('form');
  form?.addEventListener('submit', enviarMensagem);

  const name: HTMLInputElement | null | undefined =
    form?.querySelector('#name');
  const phone: HTMLInputElement | null | undefined =
    form?.querySelector('#phone');
  const email: HTMLInputElement | null | undefined =
    form?.querySelector('#email');
  const subject: HTMLInputElement | null | undefined =
    form?.querySelector('#subject');
  const message: HTMLInputElement | null | undefined =
    form?.querySelector('#message');

  function enviarMensagem(event: Event) {
    event.preventDefault();

    const mensagemWhatsApp = `${name?.value && 'Nome: ' + name.value + '\n'}${
      phone?.value && 'Telefone: ' + phone.value + '\n'
    }${email?.value && 'E-mail: ' + email.value + '\n'}${
      subject?.value && 'Assunto: ' + subject.value + '\n'
    }${message?.value && 'Mensagem: ' + message.value + '\n'}\n`;

    const linkWhatsApp = `https://api.whatsapp.com/send?phone=5511983552179&text=${encodeURIComponent(
      mensagemWhatsApp
    )}`;

    window.open(linkWhatsApp, '_blank');
    form?.clear()
  }
}

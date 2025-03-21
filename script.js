const aumentarFonteBotao = document.getElementById('aumentar-fonte');
const diminuirFonteBotao = document.getElementById('diminuir-fonte');
let tamanhoAtualFonte = 16;

aumentarFonteBotao.addEventListener('click', () => {
  tamanhoAtualFonte += 2;
  document.body.style.fontSize = `${tamanhoAtualFonte}px`;
});

diminuirFonteBotao.addEventListener('click', () => {
  if (tamanhoAtualFonte > 10) {
    tamanhoAtualFonte -= 2;
    document.body.style.fontSize = `${tamanhoAtualFonte}px`;
  }
});

const alterarContrasteBotao = document.getElementById('alterar-contraste');
let contrasteAtual = 'normal';

alterarContrasteBotao.addEventListener('click', () => {
  if (contrasteAtual === 'normal') {
    document.body.style.filter = 'invert(1)';
    contrasteAtual = 'inverso';
  } else {
    document.body.style.filter = '';
    contrasteAtual = 'normal';
  }
});
const lerTextoBotao = document.getElementById('ler-texto');

lerTextoBotao.addEventListener('click', () => {
  const texto = document.body.textContent;
  const utterance = new SpeechSynthesisUtterance(texto);
  speechSynthesis.speak(utterance);
});

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto;
let tentativas = 1;
let paragrafo = document.querySelector('p');

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto; 
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial();
gerarNumeroAleatorio();

function verificarChute() {
  let chute = parseInt(document.querySelector('input').value);
  if (chute === numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior');
      document.getElementById('reiniciar').removeAttribute('disabled');
    }
  }
  tentativas++;
  limparCampo();
}

function gerarNumeroAleatorio() {
  numeroSecreto = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  console.log(listaDeNumerosSorteados);
}

function limparCampo() {
  let input = document.querySelector('input');
  input.value = '';
}

function reiniciarJogo() {
  listaDeNumerosSorteados = [];
  gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

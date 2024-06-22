const prompt = require('prompt-sync')();

function coletarNomes() {
  let nomes = [];

  while (true) {
    let input = prompt('Insira um nome (ou pressione Enter para parar): ');

    if (input === '') {
      break;
    }

    nomes.push(input);
  }

  return nomes;
}

module.exports = coletarNomes;
const prompt = require('prompt-sync')();

function isNumber(value) {
  return !isNaN(value) && value.trim() !== '';
}

function colectNumbers() {
  let numeros = [];

  while (true) {
    let input = prompt('Insira um número (ou pressione Enter para parar): ');

    if (input === '') {
      break;
    }

    if (isNumber(input)) {
      numeros.push(Number(input));
    } else {
      console.log('Por favor, insira um número válido.');
    }
  }

  return numeros;
}

module.exports = colectNumbers;
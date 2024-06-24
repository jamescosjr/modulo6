const prompt = require('prompt-sync')();

function arrayElementsCollector() {
  let inputArray = [];

  while (true) {
    let arrayElement = prompt('Insira um elemento para o array (ou pressione Enter para parar): ');

    if (arrayElement === '') {
      break;
    }

    inputArray.push(arrayElement);
  }

  return inputArray;
}

module.exports = arrayElementsCollector;
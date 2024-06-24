const prompt = require('prompt-sync')();

function isNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}

function collectNumbers() {
    const numbers = [];
    let input;

    do {
        input = prompt('Insira um número (ou pressione Enter para parar): ');
        if (isNumber(input)) {
            numbers.push(Number(input));
        } else if (input !== '') {
            console.log('Por favor, insira um número válido.');
        }
    } while (input !== '');

    return numbers;
}

module.exports = { collectNumbers, isNumber };
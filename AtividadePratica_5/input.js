const prompt = require('prompt-sync')();

function numberRequest() {
    let number = prompt("Digite um número para verificar se é primo: ");
    return parseInt(number, 10);
}

module.exports = { numberRequest };
const prompt = require('prompt-sync')();

function numberRequest() {
    let number = prompt("Digite um número para determinar a altura do triângulo: ");
    return parseInt(number, 10);
}

module.exports = { numberRequest };
const { numberRequest } = require('./input');
const drawEvenNumberTriangle = require('./drawEvenNumbersTriangle');

const height = numberRequest();

if (!isNaN(height) && height > 0) {
    drawEvenNumberTriangle(height);
} else {
    console.log('Entrada inválida. Por favor, insira um número positivo.');
}
const { numberRequest } = require('./input');
const drawTriangle = require('./drawTriangle');

const height = numberRequest();

if (!isNaN(height) && height > 0) {
    drawTriangle(height);
} else {
    console.log('Entrada inválida. Por favor, insira um número positivo.');
}
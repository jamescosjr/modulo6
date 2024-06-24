const { collectNumbers } = require('./input');
const getEvenNumbers = require('./segregation');

const numbers = collectNumbers();

if (numbers.length > 0) {
    const evenNumbers = getEvenNumbers(numbers);
    console.log('Números inseridos:', numbers);
    console.log('Números pares:', evenNumbers);
} else {
    console.log('Nenhum número válido foi inserido.');
}
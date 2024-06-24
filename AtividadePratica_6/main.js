const { collectNumbers } = require('./input');
const getOddNumbers = require('./segregation');

const numbers = collectNumbers();

if (numbers.length > 0) {
    const oddNumbers = getOddNumbers(numbers);
    console.log('Números inseridos:', numbers);
    console.log('Números ímpares:', oddNumbers);
} else {
    console.log('Nenhum número válido foi inserido.');
}
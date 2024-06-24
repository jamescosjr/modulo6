const { collectNumbers } = require('./input');
const getEvenNumbers = require('./segregation');
const getUniqueValues = require('./uniqueValues');
const sumOfUniqueEvenNumbers = require('./summation')

const numbers = collectNumbers();

if (numbers.length > 0) {
    const evenNumbers = getEvenNumbers(numbers);
    const uniqueEvenValues = getUniqueValues(evenNumbers);
    const sumEvenUnique = sumOfUniqueEvenNumbers(uniqueEvenValues);   
    console.log('Números inseridos:', numbers);
    console.log('Números pares:', evenNumbers);
    console.log('A soma do array de números únicos e pares: ', sumEvenUnique);
} else {
    console.log('Nenhum número válido foi inserido.');
}
const coletarNumeros = require('./input');
const findMax = require('./numberMax');

try {
  let numeros = coletarNumeros();

  let maiorNumero = findMax(numeros);

  console.log('Números inseridos:', numeros);
  console.log('O maior número é:', maiorNumero);
} catch (error) {
  console.error(error.message);
}
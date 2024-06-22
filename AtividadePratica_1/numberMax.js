function findMax(numeros) {
    if (numeros.length === 0) {
      throw new Error('O array está vazio.');
    }
  
    let maior = numeros[0];
  
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > maior) {
        maior = numeros[i];
      }
    }
  
    return maior;
  }
  
  module.exports = findMax;
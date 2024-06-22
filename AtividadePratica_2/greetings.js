function greeetUsers(nomes) {
    if (!Array.isArray(nomes)) {
      throw new TypeError('Esperado uma array de nomes.');
    }
  
    return nomes.map(nome => `Olá, ${nome}!`);
  }
  
  module.exports = greeetUsers;  
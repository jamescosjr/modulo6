const coletarNomes = require('./input');
const greeetUsers = require('./greetings');

let nomes = coletarNomes();

if (nomes.length > 0) {
  let saudacoes = greeetUsers(nomes);
  saudacoes.forEach(saudacao => console.log(saudacao));
} else {
  console.log('Nenhum nome foi inserido.');
}
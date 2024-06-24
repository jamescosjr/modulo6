const caesarCipher = require('./caesarCipher');
const collectInput = require('./input');

const { sentence, shift } = collectInput();
const encryptedSentence = caesarCipher(sentence, shift);

console.log(encryptedSentence);
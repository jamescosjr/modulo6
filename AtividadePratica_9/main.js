const toBeReversed = require('./input');
const reverseWordsInSentence = require('./reverseString');

const reversedString = reverseWordsInSentence(toBeReversed);
console.log('String com palavras invertida:', reversedString);
const segregation = require('./segregation');
const removeDuplicates = require('./getUniqueValues');
const countVowels = require('./counter');
const sentence = require('./input')

function removeDuplicatesAndCountVowels(sentence) {
    const characters = segregation(sentence);
    
    const uniqueCharacters = removeDuplicates(characters);
    
    const vowelCount = countVowels(uniqueCharacters);
    
    return vowelCount;
}

const vowelCount = removeDuplicatesAndCountVowels(sentence);

console.log(`A frase "${sentence}" tem ${vowelCount} vogais em caracteres únicos.`);
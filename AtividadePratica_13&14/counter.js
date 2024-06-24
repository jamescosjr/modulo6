function countVowels(characters) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let counter = 0;

    for (let letter of characters) {
        if (vowels.includes(letter)) {
            counter++;
        }
    }

    return counter;
}

module.exports = countVowels;
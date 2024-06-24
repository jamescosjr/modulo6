function caesarCipher(sentence, shift) {
    if (!Number.isInteger(shift) || shift < 0 || shift >= 26) {
        throw new Error('O deslocamento deve ser um número inteiro positivo menor que 26.');
    }

    function cipherLetter(letter, shift) {
        let code = letter.charCodeAt(0);
        let offset = code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - offset + shift) % 26) + offset);
    }

    function cipherMessage(sentence, shift) {
        return sentence
            .split('')
            .map(letter => /[a-zA-Z]/.test(letter) ? cipherLetter(letter, shift) : letter)
            .join('');
    }

    return cipherMessage(sentence, shift);
}

module.exports = caesarCipher;
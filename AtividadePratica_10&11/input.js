const prompt = require('prompt-sync')();

function isNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}

function collectInput() {
    const sentence = prompt('Insira uma frase para cifrar: ');
    
    let shift;
    while (true) {
        const shiftInput = prompt('Insira o deslocamento (0-25): ');
        if (isNumber(shiftInput)) {
            shift = Number(shiftInput);
            if (shift >= 0 && shift < 26) {
                break;
            }
        }
        console.log('Por favor, insira um número válido entre 0 e 25.');
    }

    return { sentence, shift };
}

module.exports = collectInput;

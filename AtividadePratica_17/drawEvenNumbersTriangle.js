const getEvenNumbers = require('./getEvenNumbers');

function drawEvenNumberTriangle(n) {
    if (typeof n !== 'number' || n <= 0) {
        console.log('Por favor, insira um número positivo.');
        return;
    }

    const totalNumbers = (n * (n + 1)) / 2;
    
    const evenNumbers = getEvenNumbers(totalNumbers);

    let index = 0;

    for (let i = 1; i <= n; i++) {
        let line = evenNumbers.slice(index, index + i).join(' ');
        console.log(line);
        index += i;
    }
}

module.exports = drawEvenNumberTriangle;
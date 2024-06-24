function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function validNumber(number) {
    if (!isNaN(number)) {
        const prime = isPrime(number);
        if (prime) {
            console.log(number + ` é um número primo.`);
        } else {
            console.log(number + ` não é um número primo.`);
        }
    } else {
        console.log("Entrada inválida. Por favor, digite um número válido.");
    }
}

module.exports = { isPrime, validNumber };
function sumOfUniqueEvenNumbers(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

module.exports = sumOfUniqueEvenNumbers;
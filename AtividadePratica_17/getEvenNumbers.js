function getEvenNumbers(totalCount) {
    let evenNumbers = [];
    for (let i = 1; i <= totalCount; i++) {
        evenNumbers.push(i * 2);
    }
    return evenNumbers;
}

module.exports = getEvenNumbers;
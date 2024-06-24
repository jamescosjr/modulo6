function getUniqueValues(array) {
    let unique = new Set(array.map(char => char.toLowerCase()));
    return [...unique];
}

module.exports = getUniqueValues;
const removeDuplicates = require('./removeDuplicates');

function sortUniqueNumbers(array) {
    let uniqueArray = removeDuplicates(array);
    
    uniqueArray.sort((a, b) => a - b);

    return uniqueArray;
}

module.exports = sortUniqueNumbers;
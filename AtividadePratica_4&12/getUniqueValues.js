function getUniqueValues(array) {
    let unique = {};
    let uniqueArray = [];
  
    for (let item of array) {
      if (!unique[item]) {
        unique[item] = true;
        uniqueArray.push(item);
      }
    }
  
    return uniqueArray;
  }
  
  module.exports = getUniqueValues;
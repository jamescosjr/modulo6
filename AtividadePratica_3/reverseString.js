function reverseString(input){
    //split
    let arrayCaracter = input.split('');

    //reverse
    let arrayInverso = arrayCaracter.reverse();

    //join
    let stringReverso = arrayInverso.join('');
    return stringReverso
}

module.exports = reverseString;
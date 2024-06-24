function drawTriangle(n) {
    if (typeof n !== 'number' || n <= 0) {
        console.log('Por favor, insira um número positivo.');
        return;
    }
    
    for (let i = 1; i <= n; i++) {
        let stars = '*'.repeat(i);
        console.log(stars);
    }
}

module.exports = drawTriangle;
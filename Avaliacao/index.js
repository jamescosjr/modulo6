const { mostrarMenu } = require('./menu');
// Chama a função até escolher a opção de sair
function main() {
    while (true) {
        const sair = mostrarMenu();
        if (sair) break;
    }
}

main();
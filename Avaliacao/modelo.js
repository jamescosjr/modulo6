//Criando o modelo de contato com suas variáveis.
class Contato {
    constructor(id, nome, telefone, email) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

module.exports = Contato;
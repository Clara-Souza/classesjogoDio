
class Heroi {
    constructor(nome, idade, tipo, mensagemHTML) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.mensagemHTML = mensagemHTML;
    }

    attack() {
        switch(true) {
            case this.tipo =="mago":
                console.log(this.mensagemHTML.innerHTML)
                this.mensagemHTML.innerHTML = `O herói ${this.nome} atacou usando magia`
                break
            case this.tipo == "guerreiro":
                this.mensagemHTML.innerHTML = `O herói ${this.nome} atacou usando espada`
                break
            case this.tipo == "monge":
                this.mensagemHTML.innerHTML = `O herói ${this.nome} atacou usando artes marciais`
                break
             case this.tipo == "ninja":
                this.mensagemHTML.innerHTML = `O herói ${this.nome} atacou usando shuriken`
                break
            default:
                this.mensagemHTML.innerHTML = `Escolha uma classe correta`
                break

        }
    }
}

function Registrar() {
    let name = document.querySelector(".nome").value
    let age = document.querySelector(".idade").value
    let type = document.querySelector(".tipo").value
    let messageHTML = document.querySelector(".message");
    let heroi = new Heroi(name,age,type,messageHTML)
    heroi.attack();
}
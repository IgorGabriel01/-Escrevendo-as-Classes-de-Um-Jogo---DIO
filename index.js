class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        if (this.tipo === "Mago"){
            console.log(`${this.tipo} atacou usando magia`);
        } else if (this.tipo === "Guerreiro"){
            console.log(`${this.tipo} atacou usando espada`);
        } else if (this.tipo === "Monge"){
            console.log(`${this.tipo} atacou usando artes marciais`);
        } else if (this.tipo === "Ninja"){
            console.log(`${this.tipo} atacou usando shuriken`);
        }
    }
}

let mago = new heroi("Igor", 22, "Mago");
let guerreiro = new heroi("Alan", 22, "Guerreiro");
let monge = new heroi("Júlio", 22, "Monge");
let ninja = new heroi("Karla", 22, "Ninja");

ninja.atacar();

console.log(`Os hérois ${mago.nome}, ${guerreiro.nome}, ${monge.nome} e ${ninja.nome} sairam em uma jornada para derrotar o malígno Belzebu!`);
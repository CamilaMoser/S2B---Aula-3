function Pessoa(nome,idade){
    this.nome = nome;
    this.idade = idade;
    this.toString = function () {return `[nome=${this.nome}, idade=${this.idade}]`;};
    this.fazAniversario  = function() {this.idade = this.idade + 1;};
};

let p1 = new Pessoa('Camila', 24);
let p2 = new Pessoa('Lalá',23);

console.log(p1.toString());
console.log(p2.toString());
p1.fazAniversario();
console.log(p1.toString());
console.log(p1 === p2);


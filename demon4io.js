function Pessoa(nome,idade){
    this.nome = nome;
    this.idade = idade;
    
};

console.log(Pessoa.prototype);

Pessoa.prototype.toString = function () {return `[nome=${this.nome}, idade=${this.idade}]`;}; 

//Inicialização de Pessoa
let p1 = new Pessoa ('Moser', 25);

console.log(p1.toString());

//InstanceOf veririca se o p1 é do tipo/instancia Pessoa
console.log(p1 instanceof Pessoa);
console.log(p1 instanceof Object);

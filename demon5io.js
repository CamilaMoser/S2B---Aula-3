function Pessoa(nome,idade){
    this.nome = nome;
    this.idade = idade;
    
};

Pessoa.prototype.toString = function () {return `[Nome=${this.nome}, Idade=${this.idade}]`;}; 

//Como criar um outro obj a partir de Pessoa?
//Por exemplo, um obj PessoaComApelido

function PessoaComApelido (nome,idade,apelido){
    Pessoa.call(this,nome,idade);
    this.apelido = apelido;
};

let pa1 = new PessoaComApelido('Camila',25,'Mila');
console.log(pa1);


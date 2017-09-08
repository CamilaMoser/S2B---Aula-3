class Pessoa{
    constructor(nome, sobrenome,idade){
        this.nome = nome;
        this.sobrenome =sobrenome;
        this.idade = idade;
    }
    toString(){
        return `[Nome=${this.nome}, Idade=${this.idade}]`; 
    }
    get nomeCompleto(){
        return nome +'' + sobrenome;
    }
};

let p1 = new Pessoa('Camila','Moser',25);

console.log(p1.toString());
console.log(typeof Pessoa);
console.log(Pessoa.prototype);

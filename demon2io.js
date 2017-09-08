let pessoa = {
    nome : 'Lalá',
    idade : 2 ,
    toString : function () {return `[nome=${this.nome}, idade=${this.idade}]`;}
};

console.log(pessoa.toString());
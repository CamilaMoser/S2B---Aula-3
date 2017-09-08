let pessoa = {
     nome : 'Camila Moser',
     idade: 25
};

//console.log(pessoa.nome);
pessoa.idade = 20;
//console.log(pessoa['idade']);
pessoa.peso = '65Kg';
delete pessoa.peso
//console.log(pessoa.peso);

for(let prop in pessoa){
    console.log(prop + ":" + pessoa[prop]);
};


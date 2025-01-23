// criar um programa usando variaveis de forma certa 

const nome = "Cleber";
const sobrenome = "Batista";
const idade = 25;
const peso = 97;
const altura = 1.82;

let indiceDeMassaCorporal;
let anoNascimento;

indiceDeMassaCorporal = peso / (altura * altura)
anoNascimento = 1999 - idade

//Descobrindo o tipo de dado 
//console.log(typeof (sobrenome));

//usando Template string ("Crazes")
console.log(nome , sobrenome , 'tem' , idade , 'anos, pesa', peso ,'kg');
console.log(`tem ${altura} de altura e seu IMC é de ${indiceDeMassaCorporal}`);
console.log(`${nome} nasceu em , ${anoNascimento}`);



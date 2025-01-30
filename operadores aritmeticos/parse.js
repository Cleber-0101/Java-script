// Aplicando conceito de parseInt 
// Se existe uma variavel do tipo inteiro e concatenamos com uma string 
// O Java script tenta ajuntar os dois numeros de uma vez só 

 const numero1 = 2;
 const numero2 = parseInt("1");
 console.log(numero1 + numero2);

 // O parseInt pega a string e tranforma em um tipo inteiro 

 let n = 10;
 const a = parseInt("n");
 console.log(n + a)

 let idadeMae = 100;
 let idadePai = parseInt("20");
 console.log(idadeMae + idadePai)



//  Nan é uma propriedade do objeto global no Java script que significa Not-a-number (não numero)
//  é retornado quando uma operação matematica falha ou quando uma função tenta transformar uma string em inteiro 

//tambem é possivel ultilizar o "Number"
const num1 = 10;
const num2 = Number("100.100")
console.log(num1 + num2);


//not a number só aparece quando tento converter uma string em numero
//exemplo 
// let nome = 100;
// let idade = Number("Cleber")
//console.log(nome + idade) , isso da um erro de NaN "Not a Number ou Não Numero" 

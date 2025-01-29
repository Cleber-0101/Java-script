// TIPOS DE DADOS  em jAVA SCRIPT
// String 
// Number
// Undefined

// Strings podem se usar com aspas simples e duplas 
const nome = "Cleber" // STRINGS
const cidade = "São Paulo" // STRING
const altura = "1.82" //STRING
const maiorDeidade = false // boolean = true or false (operador logico)
var nome1

//Declarando uma variavel do tipo nula 
let Pais = null

//valores undefined não apontam pra local nenhum na memoria
console.log(nome1)

const numeroDaCasa = 225; //number
const numeroDoApartamento = 31; //number

let carro ; //undefined = não aponta pra lugar nenhum na memoria do computador , quem ceta o undefined é o proprio java script
const sobreNomeCarro = null // Nulo -> não aponta para o local nenhum local da memoria
const aprovado = true // Boolean = true , false (Lógico)

//usando typeOf dessa forma conseguimos pegar o tipo do dado e tambem o valor da variavel
console.log(typeof aprovado , aprovado)
console.log(typeof nome , nome)
console.log(typeof numeroDaCasa , numeroDaCasa)
console.log(typeof numeroDaCasa , numeroDoApartamento)

const a = [1,2]
const b = a;

console.log(a, b)

//push adiciona um valor novo no final da lista = array
b.push(3)
console.log(a ,b)




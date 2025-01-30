// Criar texto usando variáveis e constantes
// Usando constantes de forma correta !
const nome = "Cleber";
const sobrenome = "Batista";
let idade = 25;
let altura = 1.82; // Altura em metros
let peso = 97; // Peso em kg (valor numérico)
const anoDeNascimento = "24/10/1999";

// Cálculo do IMC
let imc = peso / (altura * altura);

console.log(
   nome, sobrenome, "tem",
   idade, "anos de idade,", peso, "kg,",
   "tem", altura, "m de altura,", "e nasceu em", anoDeNascimento + "."
);
console.log("Seu IMC é de:", imc.toFixed(2));

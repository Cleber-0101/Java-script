// Criar texto usando variáveis e constantes
const nome = "Cleber"; // Nome da pessoa

let idade = 25; // Idade da pessoa
let altura = 1.82; // Altura em metros
let peso = 97.00; // Peso em kg (valor numérico)

// Cálculo do IMC
let imc = peso / (altura * altura);

// Faixas de IMC ideal
const imcMin = 18.5;
const imcMax = 24.9;

// Função para calcular o peso ideal mínimo e máximo
function calcularPesoIdeal(altura) {
    return {
        pesoMin: imcMin * (altura * altura),
        pesoMax: imcMax * (altura * altura),
    };
}

// Função para classificar o IMC
function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade Grau I";
    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III";
    }
}

// Calcular peso ideal
let { pesoMin, pesoMax } = calcularPesoIdeal(altura);

// Cálculo da diferença para o peso ideal
let diferencaPeso;
if (imc < imcMin) {
    diferencaPeso = pesoMin - peso;
    console.log(
        `Seu IMC é de ${imc.toFixed(2)}. Classificação: ${classificarIMC(imc)}.`
    );
    console.log(
        `Você precisa ganhar pelo menos ${diferencaPeso.toFixed(2)} kg para atingir o peso ideal.`
    );
} else if (imc > imcMax) {
    diferencaPeso = peso - pesoMax;
    console.log(
        `Seu IMC é de ${imc.toFixed(2)}. Classificação: ${classificarIMC(imc)}.`
    );
    console.log(
        `Você precisa perder pelo menos ${diferencaPeso.toFixed(2)} kg para atingir o peso ideal.`
    );
} else {
    console.log(
        `Seu IMC é de ${imc.toFixed(2)}. Classificação: ${classificarIMC(imc)}.`
    );
    console.log("Parabéns! Você já está dentro da faixa de peso ideal.");
}

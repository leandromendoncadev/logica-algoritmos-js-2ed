const prompt = require("prompt-sync") ()                         // adiciona o pacote prompt-sync
const numero = Number(prompt("Número (centena): "))              // lê o número digitado

if (numero < 100 || numero >= 1000){
    console.log("Erro...deve ser uma centena")
    return
}

const num1 = Math.floor(numero /100)                            // obtém 1° Número
const sobra = numero % 100                                      // o que sobra (dezena)
const num2 = Math.floor(sobra / 10)                             // obtém 2° Número
const num3 = sobra % 10                                         // obtém 3° Número

console.log(`Invertido: ${num3}${num2}${num1}`)                  // exibe o Número invertido

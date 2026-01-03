const prompt = require("prompt-sync") ()                // adiciona o pacote ao programa
const salario = Number(prompt("Salário R$: "))          // lê os dados de entrada
const tempo = Number(prompt("Tempo (anos): ")) 
const quadrienos = Math.floor(tempo / 4)                //calcula quadriênos
const acrescimo = salario * quadrienos / 100            //calcula os acrescimos

console.log(`Quadriênos: ${quadrienos}`)                //exibe a resposta
console.log(`Salário Final R$ ${(salario+acrescimo).toFixed(2)}`)

const prompt = require("prompt-sync") ()                       // adiciona o pacote ao programa
const pesoDaRacao = Number(prompt("Peso da Ração (kg): "))     // lê dados de entrada
const consumoDiario = Number(prompt("Consumo Diário (gr): "))  
const gr = pesoDaRacao * 1000                                  //transforma o peso de Kg para gramas
const duracao = Math.floor(gr / consumoDiario)                 //calcula quantos dias irá durar a ração
const sobra = gr - (duracao * consumoDiario)                   //calcula quanto sobra da ração (em gramas)

console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)

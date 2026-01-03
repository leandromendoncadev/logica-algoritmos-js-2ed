// cria referência ao elemento form e ao h3 (pnde será exibida a resposta)

const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

// cria um "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    const valor15 = Number(frm.in15min.value)          //obtem o conteudo do campo "Valor por 15 min de Uso R$"
    const minutos = Number(frm.inUsoDoCliente.value)   //obtem o conteudo do campo "Tempo de Uso do CLiente"

    const periodos15 = Math.ceil (minutos / 15)
    const pagar = periodos15 * valor15

    resp1.innerText = `Valor a pagar R$: ${pagar.toFixed(2)}`

    e.preventDefault() // evita o envio do form quando o usuário clica sobre o botão "submit" de um formulário
})
    // cria referência ao elemento form e ao h3 (pnde será exibida a resposta)
    const frm = document.querySelector("form")
    const resp = document.querySelector("h3")

    // cria um "ouvinte" de evento, acionado quendo o botão "submit" for clicado
    frm.addEventListener("submit", (e) => {
        const quilo = Number(frm.inQuilo.value)                   //obtem o valor digitado no campo "Buffet por Quilo R$"
        const consumo = Number(frm.inConsumo.value)               //obtem o valor digitado no campo "Consumo do Cliente (gr)"
        
        const valor = (quilo / 1000) * consumo                    //calcula o valor a ser pago 
        resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`  //exibe a resposta

        e.preventDefault()  // evita o envio do form quando o usuário clica sobre o botão "submit" de um formulário
    })
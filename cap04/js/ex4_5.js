// cria referência ao form e elemento onde será exibida a resposta
const form = document.querySelector("form")
const resp = document.querySelector("h3")

//"ouvinte" de evento, quando o botão "submit" for clicado
form.addEventListener("submit", (e) => {    
    e.preventDefault()                                       // evita envio do form

    const numero = Number(form.inNumero.value)               // obtém número digitado no form
    const raiz = Math.sqrt(numero)                           // calcula raiz quadrada do número

/*========**Exemplo 1 - if (Number.isInteger(raiz)){....}**==========================

    if (Number.isInteger(raiz)){                             // se valor da raiz for um número inteiro
        resp.innerText = `Raiz: ${raiz}`                     // ...mostra a raiz
    } else {
        resp.innerText = `Não há raiz exata para ${numero}`  // ...mostra mensagem
    }
=====================================================================================*/


/*========**Exemplo 2 - if (raiz % 1 == 0){....}**===================================*/
 
    if (raiz % 1 == 0){                                     // se valor da raiz for um número inteiro
        resp.innerText = `Raiz: ${raiz}`                    // ...mostra a raiz
    } else {
        resp.innerText = `Não há raiz exata para ${numero}` // ...mostra mensagem
    }
})
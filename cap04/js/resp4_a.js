const form = document.querySelector("form")
const resp = document.querySelector("h3")


form.addEventListener ("submit", (e) =>{ 
    e.preventDefault()
    const numero = Number(form.inNumero.value)
    const resto = numero % 2
    
/*================** Exemplo 1 - com if/else**====================    
    if (resto === 0) {
        resp.innerText = `${numero} é Par`
    }else {
        resp.innerText = `${numero} é Ímpar`
    }
})
==================================================================*/

/*================** Exemplo 2 - com Operador Ternário**====================*/  

   resp.innerText = resto === 0 ? `${numero} é Par` : `${numero} é Ímpar`
    
})
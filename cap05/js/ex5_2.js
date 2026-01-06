const form = document.querySelector("form")          //obtem os elementos da pagina
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) =>{      
    e.preventDefault()                              // evita o envio do form

    const numero = Number(form.inNumero.value)      //obtem o numero informado
    let resposta = `Entre ${numero} e 1: `          //String para montar a resposta


/*==============**Exemplo 1 (sobrando virgula)**===============================================    
    for (let i = numero; i > 0; i = i - 1) {        // cria um "for" decrescente
        resposta = resposta + i + ","               // resposta acumula numeros (e virgulas)
    }
    resp.innerText = resposta                       // exibe a resposta
===============================================================================================*/   

/*==============**Exemplo 2 (solução a) virgula)**===============================================
    for (let i = numero; i > 0; i--){               // cria um "for" decrescente
        if(i == 1){
            resposta = resposta + i + "."           //ou resposta = `${resposta}${i}.`
        } else{
            resposta = resposta + i + ", "               // ou resposta = `${resposta}${i}, `
        }
    }
    resp.innerText = resposta                       // exibe a resposta
    
===============================================================================================*/ 

/*==============**Exemplo 3 (solução b) virgula)**===============================================  
    for (let i = numero; i > 1; i--){              // cria um "for" decrescente
        resposta = resposta + i + ", "              // resposta acumula numeros e virgulas até o n° 2 e sai do laço
    }
    resposta = resposta + "1."                     // resposta String "1." 

    resp.innerText = resposta                       // exibe a resposta do laço + resposta String
===============================================================================================*/ 

/*==============**Exemplo 4 (solução c) virgula)**===============================================*/ 
    resposta = `Entre ${numero} e 1: ${numero}`     //já contém o 1° numero 

            for (let i = numero - 1; i > 0; i--){
                resposta = resposta + ", " + i
            }
        resp.innerText = resposta                       // exibe a resposta
// =============================================================================================== 
 
})
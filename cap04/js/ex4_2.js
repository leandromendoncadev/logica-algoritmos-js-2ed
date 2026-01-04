// cria referência ao form e elementos de resposta do programa
const form = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um "ouvinte" de evento, acionado quando o botão "submit" for clicado
form.addEventListener("submit", (e) => {
    e.preventDefault() // evita o envio do "form"

    const nome = form.inNome.value                 //recebe o valor digitado no campo "Nome"
    const masculino = form.inMasculino.checked     //recebe o valor selecionado no campo "Sexo"
    const altura = Number(form.inAltura.value)     //recebe o valor informado no campo "Altura" 


/*======================**Exemplo 1 - com Declaração da variável let peso**========================    
    let peso                                       //declara a variavel peso
    if(masculino){                                 // se masculino (ou, if masculino == true)
        peso = 22 * Math.pow(altura, 2)            //Math.pow eleva ao Quadrado
    } else {
        peso = 21 * Math.pow(altura, 2) 
    }
    //apresenta a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}Kg`
==================================================================================================*/

/*==============================**Exemplo 2 - (sem declarar let peso)**============================  

    if(masculino){
        const peso = 22 * Math.pow(altura, 2)   
        resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}Kg`
    } else {
        const peso = 21 * Math.pow(altura, 2)   
        resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}Kg`
    }
==================================================================================================*/

/*=================================**Exemplo 3 - Operador Ternário**===============================*/    

    const peso = masculino ? 22 * Math.pow(altura,2) : 21 * Math.pow(altura, 2)
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}Kg`
})

form.addEventListener("reset", () => {
    resp.innerText = "" // limpa o conteúdo do elemento "h3" que exibe a resposta
})
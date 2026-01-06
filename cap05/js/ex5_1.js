const form = document.querySelector("form")     //obtem os elementos da pagina
const resp = document.querySelector("pre")

form.addEventListener("submit", (e) => {        //escuta o evento "submit" da pagina
    e.preventDefault()

    const numero = Number(form.inNumero.value)  //obtem o numero informado
    let resposta =""                            // variavel do tipo string para concatenar a resposta

    //cria um laço de repetição (i começa em 1 e é incrementado até 10)
    for (let i = 1; i <= 10; i++){
        //a variavel resposta vai acumulando os novos conteudos (nos 2 formatos)

        //concatenação
        resposta = resposta + numero + "x" + i + "=" + (numero * i) + "\n"

        //template strings
      //resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`  
    }
    //o conteudo da tag é pré alterado para exibir a tabuada do numero
    resp.innerText = resposta
})
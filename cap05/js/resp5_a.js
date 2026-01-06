// cria referência ao form e ao h3
const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // entradas
  const fruta = form.inFruta.value.trim();
  const num = Number(form.inNumero.value);

  // validações 
  if (fruta == "") {
    resp.innerText = "Informe o nome da fruta.";
    return;
  }
  if (isNaN(num) || num <= 0) {
    resp.innerText = "Informe um número inteiro maior que 0.";
    return;
  }

  // processamento: monta a repetição com separador " * "
  let saida = "";
  for (let i = 1; i <= num; i++) {
    saida += fruta;
    if (i < num) {
      saida += " * ";
    }
  }

  // saída
  resp.innerText = saida;
});

const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // entradas
  const chinchilasIni = Number(form.inChinchilas.value);
  const anos = Number(form.inAnos.value);

  // validações 
  if (isNaN(chinchilasIni) || chinchilasIni < 2) {
    resp.innerText = "O número inicial de chinchilas deve ser no mínimo 2.";
    return;
  }
  if (isNaN(anos) || anos < 1) {
    resp.innerText = "Informe um número de anos maior ou igual a 1.";
    return;
  }

  // processamento e saída 
  let texto = "";
  let qtd = chinchilasIni;

  for (let ano = 1; ano <= anos; ano++) {
    texto += `${ano}º Ano: ${qtd} Chinchilas\n`;
    qtd = qtd * 3; // após mostrar o ano atual, prepara o valor do próximo ano (triplica)
  }

 resp.innerHTML = `<pre>${texto}</pre>`;
});

function contadorRegressivo() {
  let numero = parseInt(prompt("Digite um número maior que zero:"));

  if (isNaN(numero) || numero <= 0) {
    document.write("❌ Por favor, digite um número válido maior que zero.");
    return;
  }

  document.write("<h2>Contagem regressiva:</h2>");

  while (numero >= 0) {
    document.write(numero + "<br>");
    numero--;
  }
}

// Chama a função
contadorRegressivo();

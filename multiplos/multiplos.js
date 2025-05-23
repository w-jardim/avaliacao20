function verificarMultiplos() {
  let inicio = parseInt(prompt("Digite o número inicial:"));
  let fim = parseInt(prompt("Digite o número final:"));
  let encontrou = false;

  if (isNaN(inicio) || isNaN(fim) || inicio > fim) {
    document.write("❌ Por favor, digite valores válidos (início menor ou igual ao final).");
    return;
  }

  document.write("<h2>Números pares e múltiplos de 3 entre " + inicio + " e " + fim + ":</h2>");

  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      document.write(i + "<br>");
      encontrou = true;
    }
  }

  if (!encontrou) {
    document.write("⚠️ Nenhum número atende aos critérios.");
  }
}

// Chama a função
verificarMultiplos();

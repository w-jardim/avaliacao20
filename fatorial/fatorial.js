function calcularFatorial() {
  let numero = parseInt(prompt("Digite um número inteiro positivo:"));

  if (isNaN(numero) || numero < 0) {
    document.write("❌ Por favor, digite um número inteiro positivo.");
    return;
  }

  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  document.write("✅ O fatorial de " + numero + " é: " + fatorial);
}

// Chama a função
calcularFatorial();

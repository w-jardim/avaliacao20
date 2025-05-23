function somaParesWhile() {
  let limite = parseInt(prompt("Digite um número limite:"));
  let soma = 0;
  let i = 1;

  if (isNaN(limite) || limite < 1) {
    document.write("Por favor, digite um número válido maior que zero.");
    return;
  }

  while (i <= limite) {
    if (i % 2 === 0) { // Se for par
      soma += i;       // Soma os pares
    }
    i++;               // Vai para o próximo número
  }

  document.write("A soma dos números pares de 1 até " + limite + " é: " + soma);
}

// Chama a função
somaParesWhile();

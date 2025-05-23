
function verificarPrimo() {
  let num = parseInt(prompt("Digite um número inteiro:"));

  if (isNaN(num) || num < 2) {
    document.write(num + " não é primo.");
    return;
  }

  let primo = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    document.write(num + " é primo.");
  } else {
    document.write(num + " não é primo.");
  }
}

// Chama a função quando o script carregar
verificarPrimo();


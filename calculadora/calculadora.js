function calculadoraAvancada() {
  let num1 = parseFloat(prompt("Digite o primeiro número:"));
  let num2 = parseFloat(prompt("Digite o segundo número:"));
  let operacao = prompt("Digite a operação desejada (+, -, *, /, %, **):");

  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
    document.write("Por favor, digite números válidos.");
    return;
  }

  if (operacao === "+") {
    resultado = num1 + num2;
  } else if (operacao === "-") {
    resultado = num1 - num2;
  } else if (operacao === "*") {
    resultado = num1 * num2;
  } else if (operacao === "/") {
    if (num2 === 0) {
      document.write("Erro: divisão por zero.");
      return;
    }
    resultado = num1 / num2;
  } else if (operacao === "%") {
    resultado = num1 % num2;
  } else if (operacao === "**") {
    resultado = num1 ** num2; // potência
  } else {
    document.write("Operação inválida.");
    return;
  }

  document.write("Resultado: " + resultado);
}

// Chama a função
calculadoraAvancada();

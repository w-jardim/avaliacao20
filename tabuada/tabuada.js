function tabuadaPersonalizada() {
  let base = parseInt(prompt("Digite o número base da tabuada:"));
  let limite = parseInt(prompt("Digite até onde deseja multiplicar:"));

  if (isNaN(base) || isNaN(limite) || limite < 1) {
    document.write("Por favor, digite números válidos.");
    return;
  }

  document.write("<h2>Tabuada do " + base + " até " + limite + ":</h2>");

  for (let i = 1; i <= limite; i++) {
    document.write(base + " x " + i + " = " + (base * i) + "<br>");
  }
}

// Chama a função
tabuadaPersonalizada();

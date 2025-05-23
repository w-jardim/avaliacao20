function classificarIdade() {
  let idade = parseInt(prompt("Digite sua idade:"));

  if (isNaN(idade) || idade < 0) {
    document.write("Por favor, digite uma idade válida.");
    return;
  }

  if (idade <= 12) {
    document.write("Você é uma **Criança**.");
  } else if (idade <= 17) {
    document.write("Você é um **Adolescente**.");
  } else if (idade <= 59) {
    document.write("Você é um **Adulto**.");
  } else {
    document.write("Você é um **Idoso**.");
  }
}

// Chama a função
classificarIdade();

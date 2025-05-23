function validaSenha() {
  let tentativas = 0;
  let senhaCorreta = "senai123";
  let senhaDigitada;

  while (tentativas < 3) {
    senhaDigitada = prompt("Digite a senha:");

    if (senhaDigitada === senhaCorreta) {
      document.write("✅ Acesso permitido");
      return; // Sai da função
    } else {
      tentativas++;
      alert("❌ Senha incorreta. Tentativa " + tentativas + " de 3.");
    }
  }

  // Se chegar aqui, é porque errou as 3 vezes
  document.write("🚫 Acesso bloqueado");
}

// Chama a função
validaSenha();

function mediaAritmetica() {
  let soma = 0; //guarda as somas
  let contador = 0; //faz a contagem
  let entrada; //guarda oque digitar

  while (true) { //laço infinito - loop ate digitar fim
    entrada = prompt("Digite um número (ou 'fim' para terminar):");

    if (entrada.toLowerCase() === "fim") { //verifica se digitou fim
      break; //sai do loop
    }

    let num = parseFloat(entrada); // tenta converter para numero

    if (!isNaN(num)) { //se for numero valido 
      soma += num; //soma o numero
      contador++; //conta e incrementa
    } else {
      alert("Por favor, digite um número válido ou 'fim' para sair."); //se não for numero valido
    }
  }
// Se o contador for maior que 0, calcula a média
  if (contador > 0) {
    let media = soma / contador; //calcula a media
    document.write("A média dos números digitados é: " + media.toFixed(2)); //mostra a media com 2 casas decimais
  } else {
    document.write("Nenhum número válido foi digitado."); //se não digitou nenhum numero
  }
}

// Para executar a função, basta chamar:
mediaAritmetica();

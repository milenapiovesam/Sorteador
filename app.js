// Teremos dois gatilhos: O gatilho SORTEAR e o gatilho REINICIAR.

//SORTEAR - a função já está anunciada em html.


function sortear (){ /*Aqui, a função sortear não tem parâmetros porque ela os pega dentro de seu DOM.*/
     
    // Passo 1: recuperar os valores cedidos pelo usuário:
    let quantidade = parseInt(document.getElementById("quantidade").value); /*usar o parse int para transformar os dados em números, por padrão eles são resgatados como strings*/
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    // Passo 2: gerar números aleatórios entre de e até:   
    function gerarNumeroAleatorio(de, ate) {
        return Math.floor(Math.random() * (ate - de + 1)) + de;
    }
    
     // Passo 3: repetir esse processo pelo número de vezes indicado pelo usuário e guardar cada número no array de sorteados.

    let numeroSorteado = 0
    let sorteados = [];

   // ESTAR ATENTO À ORDEM DE PASSOS DO SEU ALGORITMO!!!!!

    // Queremos sortear números aleatórios x vezes -> x=quantidade digitada pelo usuário.
    // Porém só puxamos esse número sorteado para o array, após verificar se ele é != dos números já armazenados.
    // Enquanto esse número for igual a um dos números armazenados, repetimos o sorteio.

   
    for (let i=0; i < quantidade; i++){
     // Atribuímos o resultado da função a uma variável durante a iteração para que o valor gerado a cada volta seja puxado para dentro do array "Sorteados"logo em seguida.
        do {
         numeroSorteado = gerarNumeroAleatorio(de, ate)
        }

        while (sorteados.includes(numeroSorteado))
       
        sorteados.push(numeroSorteado); // Só podemos armazenar o número DEPOIS de fazer a verificação.
    }
    
    // Passo 4: devolver os números ao usuário:
    let exibirSorteados = document.getElementById("exibir-sorteados"); // Puxamos toda a tag HTML para dentro do JS.
    exibirSorteados.innerHTML = `Números sorteados: ${sorteados}`;

    trocarStatusBotao ()

}


function trocarStatusBotao() {
    var botaoReiniciar = document.getElementById("botao-reiniciar");

    // Certifique-se de que o botão existe
    if (botaoReiniciar) {
        if (botaoReiniciar.classList.contains('botao-desabilitado')) {
            botaoReiniciar.classList.remove('botao-desabilitado');
            botaoReiniciar.classList.add('botao-habilitado');
        } else {
            botaoReiniciar.classList.remove('botao-habilitado');
            botaoReiniciar.classList.add('botao-desabilitado');
        }
    } else {
        console.error('O botão com ID "botao-reiniciar" não foi encontrado.');
    }
}

function reiniciar () {

    let inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
        input.value = ""; // Limpa o valor de cada input
    });

    let exibirSorteados = document.getElementById("exibir-sorteados"); 
    exibirSorteados.innerHTML = 'Números sorteados: nenhum até o momento.';

    trocarStatusBotao()

}








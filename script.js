// LISTA PARA GUARDAR TAREFAS
let listaDeTarefas = [];

// FUNÇÃO PARA ADICIONAR TAREFAS A LISTA 
function adicionarTarefa() {
    //Variavel para pegar valor digitado no input
    let inputTarefa = document.getElementById("inputTarefa");

    // (VALUE PEGA O VALOR DIGITADO) (TRIM APAGA OS ESPAÇOS EM BRANCO)
    let valorTarefa = inputTarefa.value.trim();

    //Variavel para pegar a seção em que vai ser exibido a mensagem de tarefa adicionada
    let exibirMensagem = document.getElementById("msgTarefaAdicionada");

    //If condicional para saber se o que foi digitado é uma entrada valida

    if (valorTarefa === "") {

        // SE FOR DIGITADO ALGO VAZIO, EXIBIR MENSAGEM DE ERRO
        let mensagemErro = `Digite Algo Válido`;
        exibirMensagem.textContent = mensagemErro;
    } else {
        // SE FOR DIGITADO ALGO VÁLIDO, IRA EXIBIR MENSAGEM DE ERRO.
        let mensagemSucesso = `Tarefa ${valorTarefa} Adicionada com Sucesso`
        exibirMensagem.textContent = mensagemSucesso;

        //METODO PARA ADICIONAR TAREFA NA LISTA (PUSH)
        listaDeTarefas.push(valorTarefa);
        //CHAMANDO FUNÇÃO PARA EXIBIR TAREFAS
        exibirTarefas();
    }

    //LIMPAR O INPUT APÓS PRIMEIRA TAREFA ADICIONADA.
    inputTarefa.value = "";
}

// FUNÇÃO PARA EXIBIR AS TAREFAS NA LISTA
function exibirTarefas() {
    // VARIAVEL PARA PEGAR SEÇÃO A LISTA DO HTML
    let listarTarefas = document.getElementById("listarTarefas");

    // A CADA LOOP FOR, LIMPA A LISTA PARA NÃO REPETIR O QUE JÁ FOI ADICIONADO
    listarTarefas.innerHTML = "";

    // VARIAVEL SERVIDO DE INDEX PARA LOOP FOR
    let idx = 0;

    // LENGTH = TAMANHO TOTAL DA LISTA | IDX++ = SOMAR 1 INDEX A MAIS NA VARIAVEL PARA PERCORRER TODA A LISTA A PARTIR DO 0
    for (idx; idx < listaDeTarefas.length; idx++) {
        //VARIAVEL PARA CRIAR NOVA TAREFA (createElement(elemento html que quer que crie))
        let novaTarefa = document.createElement("p");

        // TEXTCONTENT PARA ESCREVER O VALOR ATRIBUIDO USANDO O TAMANHO DA LISTA COM O INDEX PARA IDENTIFICAR A POSIÇÃO
        novaTarefa.textContent = listaDeTarefas[idx];

        //CRIANDO BOTÃO PARA REMOVER UMA TAREFA
        let botaoExcluir = document.createElement("button");

        //METODO PARA INSERIR O BOTÃO NO ITEM DA LISTA
        novaTarefa.appendChild(botaoExcluir);

        // METODO PARA INSERIR O NOVO ELEMENTO "LI" NA LISTA HTML
        listarTarefas.appendChild(novaTarefa);
    }
}

function limparLista() {
    listaDeTarefas.length = 0;
    exibirTarefas();
}
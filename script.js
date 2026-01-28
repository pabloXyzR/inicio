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

        //METODO PARA APAGAR MENSAGEM DE ERRO APÓS 1 SEGUNDO E MEIO DE EXIBIÇÃO
        setTimeout(() => {
            exibirMensagem.textContent = "";
        }, 1500);

    } else {
        // SE FOR DIGITADO ALGO VÁLIDO, IRA EXIBIR MENSAGEM DE ERRO.
        let mensagemSucesso = `Tarefa ${valorTarefa} Adicionada com Sucesso`
        exibirMensagem.textContent = mensagemSucesso;

        //METODO PARA APAGAR MENSAGEM DE SUCESSO APÓS 1 SEGUNDO E MEIO DE EXIBIÇÃO
        setTimeout(() => {
            exibirMensagem.textContent = "";
        }, 1500);

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

    // LENGTH = TAMANHO TOTAL DA LISTA | IDX++ = SOMAR 1 INDEX A MAIS NA VARIAVEL PARA PERCORRER TODA A LISTA A PARTIR DO 0
    for (let idx = 0; idx < listaDeTarefas.length; idx++) {
        //VARIAVEL PARA CRIAR NOVA TAREFA (createElement(elemento html que quer que crie))
        let novaTarefa = document.createElement("p");

        // TEXTCONTENT PARA ESCREVER O VALOR ATRIBUIDO USANDO O TAMANHO DA LISTA COM O INDEX PARA IDENTIFICAR A POSIÇÃO
        novaTarefa.textContent = listaDeTarefas[idx];

        //CRIANDO BOTÃO PARA EDITAR UMA TAREFA
        let botaoEditar = document.createElement("button");
        //ATRIBUINDO UMA CLASSE AO BOTÃO EDITAR
        botaoEditar.className = "btnEditar"
        //CHAMANDO A ARROW FUNCTION PARA EDITAR O ITEM DA LISTA
        botaoEditar.onclick = () => editarTarefa(idx);

        //CRIANDO BOTÃO PARA REMOVER UMA TAREFA
        let botaoRemover = document.createElement("button")
        //ATRIBUINDO UMA CLASSE AO BOTÃO REMOVER
        botaoRemover.className = "btnRemover"
        //CHAMANDO A ARROW FUNCTION PARA REMOVER O ITEM DA LISTA
        botaoRemover.onclick = () => removerTarefa(idx);

        //METODO PARA INSERIR O BOTÃO NO ITEM DA LISTA
        novaTarefa.appendChild(botaoEditar);

        //METODO PARA INSERIR O BOTÃO REMOVER NA LISTA
        novaTarefa.appendChild(botaoRemover)

        // METODO PARA INSERIR O NOVO ELEMENTO "LI" NA LISTA HTML
        listarTarefas.appendChild(novaTarefa);
    }
}

function limparLista() {
    //SETA O TAMANHO DA LISTA COMO 0 (SEM NADA ADICIONADO)
    listaDeTarefas.length = 0;
    //CHAMA A FUNÇÃO PARA EXIBIR A LISTA (QUE ESTÁ VAZIA)
    exibirTarefas();
}

function removerTarefa(idx) {
    //USA O SPLICE PARA REMOVER UM ITEM DA LISTA, PASSANDO O PARAMETRO DO FOR QUE SERVE COMO INDEX
    listaDeTarefas.splice(idx, 1);
    //CHAMA A FUNÇÃO PARA EXIBIR A LISTA COM O ITEM ACIMA REMOVIDO.
    exibirTarefas();
}

function editarTarefa(idx) {
    //CRIANDO VARIAVEL PARA GUARDAR VALOR QUE O USUARIO DESEJA EDITAR
    let tarefaEditada = prompt("Digite aqui sua nova tarefa:");
    //CRIANDO IF PARA VERIFICAR SE OQUE FOI DIGITADO É VAZIO OU VÁLIDO
    if (tarefaEditada.trim() !== "") {
        //ATRIBUINDO A LISTA O NOVO VALOR DIGITADO E ESPECIFICANDO O INDEX PARA EDITAR AQUELA TAREFA EM ESPECIFICO
        listaDeTarefas[idx] = tarefaEditada;
        //CHAMANDO A FUNÇÃO DE EXIBIR TAREFAS PARA MOSTRAR A LISTA ATUALIZADA
        exibirTarefas();
    }

}
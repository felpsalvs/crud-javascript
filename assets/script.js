//essa função irá criar uma nova linha na tabela
function addToTable() {

    //DEFININDO AS VARIÁVEIS E RECEBENDO OS DADOS
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let work = document.getElementById('work').value;
    let table = document.getElementById("myTable");

    let tableSize = table.rows.length; //CALCULANDO O TAMANHO DA TABELA
    let row = table.insertRow(tableSize); //INSERINDO UMA LINHA ABAIXO DA TABELA
    let cell1 = row.insertCell(0); //INSERINDO CELULAS DA LINHA
    let cell2 = row.insertCell(1); 
    let cell3 = row.insertCell(2); 
    let cell4 = row.insertCell(3); 
    let cell5 = row.insertCell(4); 
    let cell6 = row.insertCell(5);
    row.id = tableSize; //ADICIONANDO ID NO ELEMENTO A SER CRIADO

    //CODIGO DE BOTÃO PARA REMOVER A LINHA
    let btnCode = "<button class='remove-btn' onclick='removeToTable(this)'>Remover</button>";

    //PREECHENDO AS CELULAS DAS LINHAS
    cell1.innerHTML = tableSize;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = phone;
    cell5.innerHTML = work;
    cell6.innerHTML = btnCode;

    //LIMPANDO OS CAMPOS DE INSERÇÃO DE DADOS
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('work').value = '';

    //RETORNANDO 'false' PARA IMPEDIR RELOAD DA PÁGINA
    return false;

}

//FUNÇÃO PARA REMOVER UMA LINHA
function removeToTable(id){
    
    let row = id.parentNode.parentNode.id; //PEGANDO id DO AVO DO BOTÃO
    row = document.getElementById(row); //RECEBER O ELEMENTO DA LINHA PELO id
    row.parentNode.removeChild(row); //REMOVENDO LINHA

    return false;
}

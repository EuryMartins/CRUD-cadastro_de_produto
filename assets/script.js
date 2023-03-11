function iniciaModal() {
    const modalStart = document.getElementById('modal');
    modalStart.classList.add('mostrar')

    modalStart.addEventListener('click', function(e){
        if(e.target.id == 'fechar'){
            modalStart.classList.remove('mostrar')
        }

    })
}
//função para verificar se todos os campos foram preenchidos.
const validarCampos = function(){
    return document.getElementById('form').reportValidity()
}

//array para salvar os produtos cadastrados.
const produtoCadastrado = []

//CREAT - CRIAR
//função que vai pegar os dados digitados e adicionar no array.
const salvarProduto = function(){
    if (validarCampos()){
        const produto = {
            nome: document.getElementById('nome').value,
            valor: document.getElementById('valor').value,
            tipo: document.getElementById('tipo').value,
            quantidade: document.getElementById('quantidade').value
        }

        produtoCadastrado.push(produto)
    }
} 

//ação no botão salvar
document.getElementById('save')
    .addEventListener('click', salvarProduto)

//READ - LER
const exibir = function(){
    console.log(produtoCadastrado)
}

//UPDATE - ATUALIZAR


//DELET - EXCLUIR
const excluir = function(e){
    produtoCadastrado.remove(e)
}
function iniciaModal() {
    const modalStart = document.getElementById('modal');
    modalStart.classList.add('mostrar')

    modalStart.addEventListener('click', function(e){
        if(e.target.id == 'fechar'){
            modalStart.classList.remove('mostrar')
        }

    })
}

const validarCampos = function(){
    return document.getElementById('form').reportValidity()
}

const salvarProduto = function(){
    if (validarCampos()){
        const produto = {
            nome: document.getElementById('nome').value,
            valor: document.getElementById('valor').value,
            tipo: document.getElementById('tipo').value,
            quantidade: document.getElementById('quantidade').value
        }
    }
}

document.getElementById('save')
    .addEventListener('click', salvarProduto)
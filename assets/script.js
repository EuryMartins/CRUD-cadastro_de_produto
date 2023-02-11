function iniciaModal(modalST) {
    const modalStart = document.getElementById(modalST);
    modalStart.classList.add('mostrar')
}

const cadastrar = document.querySelector('.bt-cadastrar')
cadastrar.addEventListener('click', function(){
    iniciaModal('modal');
})


function fechaModal(modalCL) {
    const modalStart = document.getElementById(modalCL);
    modalStart.classList.add('ocutar')
}

const fechar = document.querySelector('.bt-fechar')
fechar.addEventListener('click', function(){
    fechaModal('modal');
})


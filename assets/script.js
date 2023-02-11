function iniciaModal(modalID) {
    const modalStart = document.getElementById(modalID);
    modalStart.classList.add('mostrar')
}

const cadastrar = document.querySelector('.bt-cadastrar')
cadastrar.addEventListener('click', function(){
    iniciaModal('modal');
})



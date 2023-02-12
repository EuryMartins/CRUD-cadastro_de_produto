function iniciaModal() {
    const modalStart = document.getElementById('modal');
    modalStart.classList.add('mostrar')

    modalStart.addEventListener('click', function(e){
        if(e.target.id == 'fechar'){
            modalStart.classList.remove('mostrar')
        }

    })
}


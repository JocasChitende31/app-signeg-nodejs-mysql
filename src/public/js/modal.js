const btnModal = document.getElementById('btn-modal');
const btnModaSuperior = document.getElementById('btn-modal_superior');
const modal = document.querySelector('.modal');

// funcão que vai mudar o coportamento do modal (aparecer/desaparecer)
const switchModal = () => {
    const actualStyle = modal.style.display;
    if (actualStyle === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
}

// adicionar o eventlistener ao button que vai manipuar a função switch
btnModal.addEventListener('click', switchModal);
btnModal.addEventListener('click', switchModal);





window.onclick = function (event) {
    if (event.target == modal) {
        switchModal();
    }
}

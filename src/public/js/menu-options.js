//profile
const btnOption = document.getElementById('option-btn');
const optionMenu = document.querySelector('.option-sub_list');
const option = document.querySelector('.fa-ellipsis-vertical')

const openMenu = () => {
    const actualStyle = optionMenu.style.display;
    if (actualStyle === 'block') {
        optionMenu.style.display = 'none';
        option.style.color = '';
    } else {
        optionMenu.style.display = 'block';
        option.style.color = '#53c9e6';
    }
}

// info-body
const perfilInfoBody = document.querySelector('.perfil-info_body');
const barOpenBtn = document.getElementById('btn-perfil-info_body__open');
const barCloseBtn = document.querySelector('.info-body');
const styleIconMinus = document.querySelector('.info-open_body__minus');
const styeIconPlus = document.querySelector('.info-opne_body__plus');
const bgInfoBodyColed = document.querySelector('.background-body');

const openInfoBody = () => {
    const actualStyle = barCloseBtn.style.display;
    if (actualStyle === 'flex') {
        barCloseBtn.style.display = 'none';
        styeIconPlus.style.display = 'block';
        styleIconMinus.style.display = 'none';
        bgInfoBodyColed.style.display = 'block'
    } else {
        barCloseBtn.style.display = 'flex';
        styleIconMinus.style.display = 'block';
        styeIconPlus.style.display = 'none';
        bgInfoBodyColed.style.display = 'none'
    }
}

btnOption.addEventListener('click', openMenu);
barOpenBtn.addEventListener('click', openInfoBody)

window.onclick = (event) => {
    if (event.target == optionMenu) {
        openMenu();
    } else if (event.target == perfilInfoBody) {
        openInfoBody();
    }
}





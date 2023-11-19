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

btnOption.addEventListener('click', openMenu);
btnOption.removeEventListener('click', openMenu);

window.onclick = (event) => {
    if (event.target == optionMenu) {
        openMenu();
    }else{
        openMenu();
    }
}
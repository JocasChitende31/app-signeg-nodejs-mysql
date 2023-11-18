// login hover
const _navText = document.querySelector('.text-login');
const _navTextHover = document.querySelector('.text-login_hover')

const apperAnotherLogin = () => {
    const actualStyle = _navTextHover.style.display;

    if (actualStyle === 'none') {
        _navTextHover.style.display = 'flex';
        _navText.style.display = 'none';
    } else {
        _navTextHover.style.display = 'none';
        _navText.style.display = 'flex';
    }

}

_navText.addEventListener('mouseover', apperAnotherLogin);
_navTextHover.addEventListener('mouseout', apperAnotherLogin);

window.onmouseover = (event) => {
    if (event.target === _navText) {
        apperAnotherLogin();
    }
}


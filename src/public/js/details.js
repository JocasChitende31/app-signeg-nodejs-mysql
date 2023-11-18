const cardDetailsQuarterly = document.getElementById('card-details_quarterly');
const cardDetailsSemiAnnual = document.getElementById('card-details_s-annual');
const cardDetailsAnnual = document.getElementById('card-details_annual');
const checkboxDetails0 = document.querySelectorAll(".checkbox-hover")[0]
const checkboxDetails1 = document.querySelectorAll(".checkbox-hover")[1]
const checkboxDetails2 = document.querySelectorAll(".checkbox-hover")[2]


const apperCheckbok0 = () => {
    checkboxDetails0.style.color = 'green';
}
const apperCheckbok1 = () => {
    checkboxDetails1.style.color = 'green';
}
const apperCheckbok2 = () => {
    checkboxDetails2.style.color = 'green';
}
const desapperCheckbok0 = () => {
    checkboxDetails0.style.color = 'white';
}
const desapperCheckbok1 = () => {

    checkboxDetails1.style.color = 'white';
}
const desapperCheckbok2 = () => {
    checkboxDetails2.style.color = 'white';
}

cardDetailsQuarterly.addEventListener('mouseover', apperCheckbok0);
cardDetailsQuarterly.addEventListener('mouseout', desapperCheckbok0);
cardDetailsSemiAnnual.addEventListener('mouseover', apperCheckbok1);
cardDetailsSemiAnnual.addEventListener('mouseout', desapperCheckbok1);
cardDetailsAnnual.addEventListener('mouseover', apperCheckbok2);
cardDetailsAnnual.addEventListener('mouseout', desapperCheckbok2);

window.onmouseover = (event) => {
    if (event.target === cardDetailsQuarterly) {
        apperCheckbok0();
    } else if (event.target === cardDetailsSemiAnnual) {
        apperCheckbok1();
    } else if (event.target === cardDetailsAnnual) {
        apperCheckbok2();
    }
}
window.onmouseout = (event) => {
    if (event.target != cardDetailsQuarterly) {
        desapperCheckbok0();
    } else if (event.target != cardDetailsSemiAnnual) {
        desapperCheckbok1();
    } else if (event.target != cardDetailsAnnual) {
        desapperCheckbok2();
    }
}

const btnReadMore = document.getElementById('read-more_service_0');
const btnReadMore1 = document.getElementById('read-more_service_1');
const btnReadMore2 = document.getElementById('read-more_service_2');
const btnReadMore3 = document.getElementById('read-more_service_3');
const btnReadMore4 = document.getElementById('read-more_service_4');
const btnReadMore5 = document.getElementById('read-more_service_5');

const pDesription = document.querySelectorAll('.p-description')[0];
const pDesription1 = document.querySelectorAll('.p-description')[1];
const pDesription2 = document.querySelectorAll('.p-description')[2];
const pDesription3 = document.querySelectorAll('.p-description')[3];
const pDesription4 = document.querySelectorAll('.p-description')[4];
const pDesription5 = document.querySelectorAll('.p-description')[5];

const headerService = document.querySelectorAll('.header-service')[0];
const headerService1 = document.querySelectorAll('.header-service')[1];
const headerService2 = document.querySelectorAll('.header-service')[2];
const headerService3 = document.querySelectorAll('.header-service')[3];
const headerService4 = document.querySelectorAll('.header-service')[4];
const headerService5 = document.querySelectorAll('.header-service')[5];

const apperParagraph = () => {
    const actualStyle = pDesription.style.display;

    if (actualStyle === 'block') {

        pDesription.style.display = 'none';
        headerService.style.color = 'black'
    } else {

        pDesription.style.display = 'block';
        headerService.style.color = 'rgb(114, 194, 231)';

        pDesription1.style.display = 'none';
        headerService1.style.color = 'black';

        pDesription2.style.display = 'none';
        headerService2.style.color = 'black';

        pDesription3.style.display = 'none';
        headerService3.style.color = 'black';

        pDesription4.style.display = 'none';
        headerService4.style.color = 'black';

        pDesription5.style.display = 'none';
        headerService5.style.color = 'black';

       
    }
}
const apperParagraph1 = () => {
    const actualStyle = pDesription1.style.display;

    if (actualStyle === 'block') {

        pDesription1.style.display = 'none';
        headerService1.style.color = 'black';
    } else {

        pDesription.style.display = 'none';
        headerService.style.color = 'black';

        pDesription1.style.display = 'block';
        headerService1.style.color = 'rgb(114, 194, 231)';

        pDesription2.style.display = 'none';
        headerService2.style.color = 'black';

        pDesription3.style.display = 'none';
        headerService3.style.color = 'black';

        pDesription4.style.display = 'none';
        headerService4.style.color = 'black';

        pDesription5.style.display = 'none';
        headerService5.style.color = 'black';


    }
}
const apperParagraph2 = () => {

    const actualStyle = pDesription2.style.display;

    if (actualStyle === 'block') {
        pDesription2.style.display = 'none';
        headerService2.style.color = 'black';
    } else {

        pDesription.style.display = 'none';
        headerService.style.color = 'black';

        pDesription1.style.display = 'none';
        headerService1.style.color = 'black';

        pDesription2.style.display = 'block';
        headerService2.style.color = 'rgb(114, 194, 231)';

        pDesription3.style.display = 'none';
        headerService3.style.color = 'black';

        pDesription4.style.display = 'none';
        headerService4.style.color = 'black';

        pDesription5.style.display = 'none';
        headerService5.style.color = 'black';

    }
}

const apperParagraph3 = () => {
    const actualStyle = pDesription3.style.display;

    if (actualStyle === 'block') {
        pDesription3.style.display = 'none';
        headerService3.style.color = 'block';
    } else {
        // Fechar todas as outras abas
        pDesription.style.display = 'none';
        headerService.style.color = 'black';

        pDesription1.style.display = 'none';
        headerService1.style.color = 'black';

        pDesription2.style.display = 'none';
        headerService2.style.color = 'black';

        pDesription3.style.display = 'block';
        headerService3.style.color = 'rgb(114, 194, 231)';

        pDesription4.style.display = 'none';
        headerService4.style.color = 'black';

        pDesription5.style.display = 'none';
        headerService5.style.color = 'black';

    }
}

const apperParagraph4 = () => {

    const actualStyle = pDesription4.style.display;

    if (actualStyle === 'block') {
        pDesription4.style.display = 'none';
        headerService4.style.color = 'black';
    } else {

        pDesription.style.display = 'none';
        headerService.style.color = 'black';

        pDesription1.style.display = 'none';
        headerService1.style.color = 'black';

        pDesription2.style.display = 'none';
        headerService2.style.color = 'black';

        pDesription3.style.display = 'none';
        headerService3.style.color = 'black';

        pDesription4.style.display = 'block';
        headerService4.style.color = 'rgb(114, 194, 231)';

        pDesription5.style.display = 'none';
        headerService5.style.color = 'black';


    }
}

const apperParagraph5 = () => {

    const actualStyle = pDesription5.style.display;

    if (actualStyle === 'block') {

        pDesription5.style.display = 'none';
        headerService5.style.color = 'black';
    } else {

        pDesription.style.display = 'none';
        headerService.style.color = 'black';

        pDesription1.style.display = 'none';
        headerService1.style.color = 'black';

        pDesription2.style.display = 'none';
        headerService2.style.color = 'black';

        pDesription3.style.display = 'none';
        headerService3.style.color = 'black';

        pDesription4.style.display = 'none';
        headerService4.style.color = 'black';

        pDesription5.style.display = 'block';
        headerService5.style.color = 'rgb(114, 194,231)';
    }
}

btnReadMore.addEventListener('click', apperParagraph);
btnReadMore1.addEventListener('click', apperParagraph1);
btnReadMore2.addEventListener('click', apperParagraph2);
btnReadMore3.addEventListener('click', apperParagraph3);
btnReadMore4.addEventListener('click', apperParagraph4);
btnReadMore5.addEventListener('click', apperParagraph5);

window.onclick = (event) => {
    if (event.target == pDesription) {
        apperParagraph();
    } else if (event.target == pDesription1) {
        apperParagraph1()
    } else if (event.target == pDesription2) {
        apperParagraph2();
    } else if (event.target == pDesription3) {
        apperParagraph3();
    } else if (event.target == pDesription4) {
        apperParagraph4();
    } else if (event.target == pDesription5) {
        apperParagraph5();
    }
}


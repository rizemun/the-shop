window.onload = init();



function init() {
    //берем все кнопки (label для радиокнопок) изменяющие размер и цвет
    const buttons = document.getElementsByClassName('item__picker-button');
    for (let i = 0; i < buttons.length; i++) {
        //слушатель события изменения радиокнопки
        buttons[i].addEventListener('change', function () {
            if (this.name === 'color') {
                //в качестве аргумента - индекс в массиве адресов, соответствеющий цвету кнопки
                changeImage(this.value);
            }
        });
    }

    window.onscroll = function() {

        let topMenuElem = document.getElementsByClassName('header-bottom')[0];
        const y = window.pageYOffset || document.documentElement.scrollTop;
        if ((y >= 100) && (!topMenuElem.classList.contains('_fixed'))) {
            topMenuElem.classList.add('_fixed');
            console.log('fix');
        }
        else if ((y<100)&&(topMenuElem.classList.contains('_fixed'))){
            topMenuElem.classList.remove('_fixed');
            console.log('unfix');
        }
    }
}

function changeImage(value) {
    const path = 'img/tshirts/';

    const fileNames = [
        'tshirt_white.jpg',
        'tshirt_yellow.jpg',
        'tshirt_green.jpg' ];

    const imageElem = document.getElementsByClassName('item__image')[0];
    imageElem.src = path + fileNames [value];
}

function scroll(){
    const y = window.pageYOffset;
    console.log(y);
   /* if ((y>=100)&&(topMenuElem.classList.contains('_fixed'))) {
        topMenuElem.classList.add('_fixed');
    }
    else if(!topMenuElem.classList.contains('_fixed')){
        topMenuElem.classList.remove('_fixed');
    }*/
}

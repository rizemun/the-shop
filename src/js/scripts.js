window.onload = init();



function init() {
    const buttons = document.getElementsByClassName('item__picker-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('change', function(){

            if(this.name==='color'){
                changeImage(this.value);

            }
        });
    }
}

function changeImage(value){
    /*const path = '/img/tshirts/';

    const fileNames = [ 'tshirt_white.jpg',
                        'tshirt_yellow.jpg',
                        'tshirt_green.jpg' ];

    const imageElem = document.getElementsByClassName('item__image')[0];
    imageElem.src = path + fileNames [value];
    */


    const imageElems = document.getElementsByClassName('item__image');
    for(let i=0; i<imageElems.length;i++) {
        if(i==value){
            imageElems[i].classList.remove('invisible');
            imageElems[i].classList.add('visible');
        }
        else {
            imageElems[i].classList.add('invisible');
            imageElems[i].classList.remove('visible');
        }
    }
}



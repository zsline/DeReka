/* Проверка поддержки webp, добавление класса для html */

export function isWebp() {
    //проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    //добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}
// start animation

const blockAnim = document.querySelectorAll('.animate');
if(blockAnim){
    blockAnim.forEach((el) => {
        el.addEventListener('click', function() {
            console.dir(el)
            el.classList.toggle('anim-start');
            let heightImg = +el.childNodes[1].childNodes[3].height;
            let content = +el.parentElement.clientHeight;
            console.dir(heightImg);
            let id = setInterval(frame, 2);
            let pos = 0;
            function frame(){
                if(pos == -heightImg + content || !el.classList.contains('anim-start')){
                    clearInterval(id);
                 } else {
                    pos -- ;
                    el.childNodes[1].childNodes[3].style.top = pos + 'px';
                 }
            }

        });
    });
}

// open text

const texts = document.querySelectorAll('.type__content--text');
if(texts) {
    texts.forEach((el) => {
        const btn = el.children[1];
        const text = el.children[0];
        btn.addEventListener('click', function(){
            if(btn.innerText == 'Читать'){
                btn.innerHTML = 'Закрыть';
                text.style.display = 'block';
            } else if (btn.innerText == 'Закрыть'){
                btn.innerHTML = 'Читать';
                text.style.display = 'none';
            } else {
                btn.innerHTML = 'Читать';
                text.style.display = 'none';

            }
        });
        
    });
}



const navMenu = document.querySelector('.header__nav');
const openMenu = document.querySelector('.header__open');
const closeMenu = document.querySelector('.header__close');
if(navMenu) {
    openMenu.addEventListener('click', function() {
        navMenu.style='top: 0;';
    });
    closeMenu.addEventListener('click', function() {
        navMenu.style='top: -100%;';
    });
};

import { DerTabs } from "./tabsplugin.js";
const tab = new DerTabs('tab', {
    isChanget: (tabs) => {
    }
});
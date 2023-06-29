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
const activeContent = document.querySelector('.tabs__panel--active');
if(blockAnim){
    blockAnim.forEach((el) => {
        // el.classList.remove('anim-start');
        if(el.contains(activeContent)){
        }
        setTimeout(() => el.classList.add('anim-start'), 4000);
        el.addEventListener('click', function() {
            el.classList.toggle('anim-start');
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
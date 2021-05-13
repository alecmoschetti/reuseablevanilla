
import {expandNav} from './nav';

//global variables
const body = document.querySelector('body');
const main = document.querySelector('main');
const carousel = document.querySelector('.carousel');
const formContainer = document.querySelector('.form__container');

function hideElement(arrEl) {
    arrEl.forEach(element => element.classList.add('hidden'));
}

function showElement(el) {
    el.classList.remove('hidden');
}

function setHeading(el, text) {
    el.innerHTML = `${text}`;
}

function initEventListeners() { 
    body.addEventListener('click', (e) => {
        let h1 = main.querySelector('h1');
        const id = e.target.id;
        const parentID = e.target.parentNode.id;
        if (id === 'expand' || id === 'minimize') {
            expandNav(id);
        } else if (id === 'alienForm') {
            hideElement([carousel]);
            showElement(formContainer);
            setHeading(h1, 'VOLUNTEER FOR ALIEN ABDUCTION');
        } else if (parentID === 'carousel') {
            hideElement([formContainer]);
            showElement(carousel);
            setHeading(h1, 'VANILLA JS CAROUSEL');
        } else if (parentID === 'visit') {
            hideElement([carousel, formContainer]);
            expandNav();
            setHeading(h1, 'VISIT');
        } else if (parentID === 'about') {
            hideElement([carousel, formContainer]);
            expandNav();
            setHeading(h1, 'ABOUT');
        } else if (parentID === 'contact') {
            hideElement([carousel, formContainer]);
            expandNav();
            setHeading(h1, 'CONTACT');
        } else if (parentID === 'support') {
            hideElement([carousel, formContainer]);
            expandNav();
            setHeading(h1, 'SUPPORT');
        } else {
            return;
        }
    });
}

export {initEventListeners} 
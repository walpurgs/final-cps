const menu = document.getElementById('menu');
const menuOpen = document.getElementById('open-menu');
const menuClose = document.getElementById('close-menu');

menuOpen.addEventListener('click', function() {
    menu.classList.add('open')
});

menuClose.addEventListener('click', function() {
    menu.classList.remove('open')
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        menu.classList.remove('open')
    }
});

document.querySelector('#menu .menu__box').addEventListener ('click', event => {
    event._isClickWithInModal = true;
});

menu.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// feedback

const feedback = document.getElementById('feedback');
const feedbackOpen2 = document.getElementById('open-feedback2');
const feedbackOpen3 = document.getElementById('open-feedback3');
const feedbackClose = document.getElementById('close-feedback');
const feedbackClose2 = document.getElementById('close-feedback2');

feedbackOpen2.addEventListener('click', function() {
    feedback.classList.add('open')
    menu.classList.remove('open')
});
feedbackOpen3.addEventListener('click', function() {
    feedback.classList.add('open')
    menu.classList.remove('open')
});

feedbackClose.addEventListener('click', function() {
    feedback.classList.remove('open')
});
feedbackClose2.addEventListener('click', function() {
    feedback.classList.remove('open')
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        feedback.classList.remove('open')
    }
});

document.querySelector('#feedback .feedback__box').addEventListener ('click', event => {
    event._isClickWithInModal = true;
});

feedback.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// call

const call = document.getElementById('call');
const callOpen1 = document.getElementById('open-call');
const callOpen2 = document.getElementById('open-call2');
const callClose = document.getElementById('close-call');
const callClose2 = document.getElementById('close-call2');

callOpen1.addEventListener('click', function() {
    call.classList.add('open')
    menu.classList.remove('open')
});
callOpen2.addEventListener('click', function() {
    call.classList.add('open')
    menu.classList.remove('open')
});

callClose.addEventListener('click', function() {
    call.classList.remove('open')
});
callClose2.addEventListener('click', function() {
    call.classList.remove('open')
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        call.classList.remove('open')
    }
});

document.querySelector('#call .call__box').addEventListener ('click', event => {
    event._isClickWithInModal = true;
});

call.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// dop

const dop = document.getElementById('dop');
const dopOpen1 = document.getElementById('dop-btn1');
const dopOpen2 = document.getElementById('dop-btn2');
const dopOpen3 = document.getElementById('dop-btn3');
const dopOpen4 = document.getElementById('dop-btn4');
const dopOpen5 = document.getElementById('dop-btn5');
const dopOpen6 = document.getElementById('dop-btn6');
const dopOpen7 = document.getElementById('dop-btn7');
const dopClose = document.getElementById('close-dop');

dopOpen1.addEventListener('click', function() {
    dop.classList.add('open')
});
dopOpen2.addEventListener('click', function() {
    dop.classList.add('open')
});
dopOpen3.addEventListener('click', function() {
    dop.classList.add('open')
});
dopOpen4.addEventListener('click', function() {
    dop.classList.add('open')
});
dopOpen5.addEventListener('click', function() {
    dop.classList.add('open')
});
dopOpen6.addEventListener('click', function() {
    dop.classList.add('open')
});
dopOpen7.addEventListener('click', function() {
    dop.classList.add('open')
});

dopClose.addEventListener('click', function() {
    dop.classList.remove('open')
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        dop.classList.remove('open')
    }
});

document.querySelector('#dop .modal-dop__box').addEventListener ('click', event => {
    event._isClickWithInModal = true;
});

menu.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

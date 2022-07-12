const close = document.getElementById('close');
const open = document.getElementById('open')
const container = document.querySelector('.container')
close.addEventListener('click', () => {
    container.classList.add('show_nav')
})
open.addEventListener('click', () => {
    container.classList.remove('show_nav')
})
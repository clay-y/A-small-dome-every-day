const Search = document.querySelector('.search');
const But = document.querySelector('.but');
const Input = document.querySelector('.input');

But.addEventListener('click',()=>{
    Search.classList.toggle('active');
    Input.focus()
})
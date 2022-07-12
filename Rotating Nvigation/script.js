const close = document.getElementById('close');
const open  = document.getElementById('open')
const container = document.querySelector('.container')
// const circle = document.querySelector('.circle')
// const icon = document.querySelectorAll('li')
// let flag = true
close.addEventListener('click',()=>{
    container.classList.add('show_nav')
    // if(flag){
    //     container.style.transform = 'rotate(' + -20 + 'deg)';
    //     circle.style.transform = 'rotate(' + -50 + 'deg)';
    //     flag = false
    // }
    // icon.forEach((item,index)=>{
    //     item.style.transform = 'translateX('+ 0 +')'
    // })
})
open.addEventListener('click',()=>{
    container.classList.remove('show_nav')
    // if(flag === false){
    //     container.style.transform = 'rotate(' + 0 + 'deg)';
    //     circle.style.transform = 'rotate(' + 0 + 'deg)';
    //     flag = true
    // }
    // icon.forEach((item,index)=>{
    //     item.style.transform = 'translateX('+ 0 +')'
    // })
})

// 自己写的
// const panel = document.querySelectorAll('.panel')
// for (let i = 0; i < panel.length; i++) {
//     panel[i].onclick =()=>{
//         let brother = panel[i].parentNode.children
//         for (let j = 0; j < brother.length; j++) {
//             brother[j].classList.remove('active')
//         }
//         panel[i].classList.add('active')
//     }
// }

// 模仿的

const panel = document.querySelectorAll('.panel')
panel.forEach(panel=>{
    panel.addEventListener('click',()=>{
        classListRemove()
        panel.classList.add('active')
    })
})

function classListRemove() {
    panel.forEach(panel=>{
        panel.classList.remove('active')
    })
}
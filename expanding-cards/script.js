

// 第二种实现方式
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

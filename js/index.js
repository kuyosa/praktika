let cards = document.querySelectorAll('.card')
let modal = document.querySelector('.modal')
let back = document.querySelector('.modal-background')
let close = document.querySelector('.modal .close')
cards.forEach((element)=>{
    element.addEventListener("click", (e)=>{
        e.preventDefault()
        modal.style.display = 'flex'
        back.style.display = 'block'

    })
})

back.addEventListener('click', (e)=>{
     modal.style.display = 'none'
    back.style.display = 'none'
    info.style.display = 'none'
})
close.addEventListener('click', (e)=>{
    modal.style.display = 'none'
    back.style.display = 'none'
    info.style.display = 'none'
})


let structure = document.querySelector('.structure')
let info = document.querySelector('.structure-info')
structure.addEventListener('click', (e)=>{
    info.style.display = 'block'
})

modal.addEventListener('click', (e)=>{
    if (e.target != structure)
        info.style.display = 'none'
})


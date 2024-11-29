  let menu = document.querySelectorAll('.main-menu')

  menu.forEach((element)=>{
    element.addEventListener('mouseover', (e)=>{
      element.classList.add('active')
    })
    element.addEventListener('mouseout', (e)=>{
      element.classList.remove('active')
    })
  })
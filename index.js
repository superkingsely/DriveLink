const mobileBtnMenu=document.querySelector('header .menu')
const nav=document.querySelector('nav')
const closeMenu=document.querySelector('nav span')
console.log(closeMenu)

mobileBtnMenu.addEventListener('click',()=>{
    nav.classList.toggle('clicked')
})

closeMenu.addEventListener('click',()=>{
    nav.classList.remove('clicked')
})

nav.addEventListener('click',()=>{
    if(nav.classList.contains('clicked')){
        nav.classList.remove('clicked')
    }
})
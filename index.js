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
const p =document.querySelector('p')
p.classList.add('.poppins-medium')
// .poppins-medium
// .poppins-light

// --------------Typed js
const typed=new Typed('.hero-con span',{
    strings:['Drivelink','Drivelink','Drivelink','Drivelink'],
    loop:true,
    typeSpeed:100,
    backSpeed:100,
    backDelay:1500,
})
// -------------scrollreveal
ScrollReveal({
    reset:true,
    distance:'100px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.one-left',{origin:'right'})
ScrollReveal().reveal('.three-left',{origin:'right'})
ScrollReveal().reveal('.two-right',{origin:'left'})
ScrollReveal().reveal('.four-right',{origin:'left'})
// ScrollReveal().reveal('.bottom-phone',{origin:'bottom'})
ScrollReveal().reveal('.h-text',{origin:'top'})
ScrollReveal().reveal('.btn-g',{origin:'bottom'})
ScrollReveal().reveal('.hero-img',{origin:'left'})
ScrollReveal().reveal('.ab',{origin:'left'})
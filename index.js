const mobileBtnMenu=document.querySelector('header .menu')
const nav=document.querySelector('nav')
const closeMenu=document.querySelector('nav span')

let sections=document.querySelectorAll('section')
let navLinks=document.querySelectorAll('header nav a')

// const form=document.querySelector('form')


// const email=document.getElementById('email')
// const firstName=document.getElementById('firstName')
// const lastName=document.getElementById('lastName')
// const message=document.getElementById('message')




window.onload=()=>{

// navLinks.forEach(link=>{
//     link.addEventListener('click',()=>{
//         link.classList.remove('active')
//     })
// })

window.addEventListener('scroll',()=>{
    sections.forEach(sec=>{
        let wintop=window.scrollY;
        let sectop=sec.offsetTop -150;
        let clinHeight=sec.offsetHeight;
        let id=sec.getAttribute('id')

        if(wintop>=sectop && wintop< sectop + clinHeight){
            navLinks.forEach(link=>{
                link.classList.remove('active')
                document.querySelector(`nav a[href*=${id}]`).classList.add('active')
            })
        }else{

        }
    })
})


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
// ScrollReveal().reveal('.ab',{origin:'left'})

// send emil


// const sendEmail=()=>{
//     let bodyMessage=`FullName: ${firstName.value} ${lastName.value} <br> Email:${email.value} <br> Message: ${message.value}`
//     const validation=()=>{
//         if(firstName.value!=''&& lastName.value!='' && message.value!=''){
//             console.log('better')
           
//             return "superkingsely@gmail.com"
//         }else{
//             console.log('not good')
//             return ''
//             // return  '<h1>bad</h1>'
//         }
//     }
//     Email.send({
//         SecureToken : "f978e73c-127d-47e2-887c-1a709c11f1a2",
//         To : 'dev.drivelink@gmail.com',
//         From : validation(),
//         Subject : "Please Attention here A client is trying to contact DriveLink",
//         Body : bodyMessage
//     }).then(
//         message => {
//             console.log(message)
//             // alert(message)
//             if( message=='OK'){
//             Swal.fire({
//                 title: "Success!",
//                 text: "Message Sent Successfully!",
//                 icon: "success"
//               });
//         }else{
//             Swal.fire({
//                 icon: "error",
//                 title: "Oops...",
//                 text: "Something went wrong!",
//                 // footer: '<a href="#">Why do I have this issue?</a>'
//               });
//         }
//       }
//     );

// }
// form.onsubmit=(e)=>{
//     e.preventDefault();
//     console.log('okay')
//     sendEmail();
// }
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log('okay')
//     sendEmail();
// })
}
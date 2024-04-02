const mobileBtnMenu=document.querySelector('header .menu')
const nav=document.querySelector('nav')
const closeMenu=document.querySelector('nav span')


const form=document.querySelector('form')
const email=document.getElementById('email')
const firstName=document.getElementById('firstName')
const lastName=document.getElementById('lastName')
const message=document.getElementById('message')


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

const sendEmail=()=>{
    let bodyMessage=`FullName: ${firstName.value} ${lastName.value} <br> Email:${email.value} <br> Message: ${message.value}`
    const validation=()=>{
        if(firstName.value!=''&& lastName.value!='' && message.value!=''){
            console.log('better')
           
            return "superkingsely@gmail.com"
        }else{
            console.log('not good')
            return ''
            // return  '<h1>bad</h1>'
        }
    }
    Email.send({
        SecureToken : "f978e73c-127d-47e2-887c-1a709c11f1a2",
        To : 'dev.drivelink@gmail.com',
        From : validation(),
        Subject : "Please Attention here A client is trying to contact DriveLink",
        Body : bodyMessage
    }).then(
        message => {
            console.log(message)
            // alert(message)
            if( message=='OK'){
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                // footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
      }
    );

}
form.onsubmit=(e)=>{
    e.preventDefault();
    console.log('okay')
    sendEmail();
}
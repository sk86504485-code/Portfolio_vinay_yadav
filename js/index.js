const list=document.getElementById('navbar-toggle');
const menu=document.getElementsByClassName('navbar-manu');
function toggleMenu(){
    menu[0].classList.toggle("active");
}




/* logo */
let logo=document.getElementById("logo-portfolio")
console.log(logo)
 let logo_text="Vinay Yadav"
 let l=0;
 let logo_interval= setInterval(function(){
  logo.innerHTML+=logo_text[l];
  l++;
  if(l>logo_text.length){
    logo.innerHTML=""
    l=0;
  }

 },200);



 let frontend=document.getElementById("frontend");
const text="Frontend Developer"
let i=0;

let interval =setInterval(function(){
  frontend.innerHTML+=text[i];
  i++;
if(i>text.length){
  frontend.innerHTML=""
  i=0;
}
},200)

let about_img= document.getElementsByClassName("about-img")
setTimeout(function(){
  about_img.style.display="block"
},300)




function sendmessage(){
  let name=document.getElementById("name")
  let email=document.getElementById("email")
  let subject=document.getElementById("subject")
  let message=document.getElementById("message")
  console.log(name.value)
  console.log(email.value)
  console.log(subject.value)
  console.log(message.value)  
  document.getElementById("form-reset").reset();
}





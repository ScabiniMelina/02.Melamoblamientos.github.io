var iconMenu = document.getElementById("icon-menu")
var check = document.getElementById("checkbox")
var menu =document.getElementById("menu")
var  header=document.getElementById("mainMenu")

// var opMenu = document.getElementsByClassName




function openClose(){
  menu.classList.toggle("open")
  
}

check.addEventListener("click",function(){
openClose()
})
menu.addEventListener("click",function(){
  openClose()
})


window.onscroll= function(){
  let actualSlide = window.pageYOffset;
  // console.log (actualSlide)
  if (actualSlide >50 ){
    header.style.background='var(--color2)';
    this.header.style.transition =" all 4s linear"
  }
}


  // cambio color del menu cuando hace scroll
 
const icon=document.querySelectorAll(".fa");
const drop =document.querySelectorAll(".flexroww");
const hamburger=document.querySelector(".hamburger");
const menu=document.querySelector(".container");
const firsth=document.querySelector(".firsth");
for (const drp of drop){
    drp.addEventListener('click', handleClick)
  }
  
  function handleClick(event) {
    const myClass = event.target.parentElement.getAttribute("id")
    const P = document.querySelector(`.${myClass}`)
    if (P.style.display === 'block'){
      P.style.display = 'none'
  }else{
    P.style.display = 'block'
  }
  }

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    if(firsth.style.marginTop!=="150px"){
        firsth.style.marginTop="150px";
    }
    else{
        firsth.style.marginTop="10px";
    }
    
})


  
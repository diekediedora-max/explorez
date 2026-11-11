let open = document.getElementById("open")
let close = document.getElementById("close")
let nav = document.getElementById("nav")
open.addEventListener("click", function(){
    // nav.classList.add("openMenue")
   mobileMenue.style.display="block"
  open.style.display ="none"
    close.style.display ="block"
})
close.addEventListener("click", function(){
    // nav.classList.remove("openMenue")
     mobileMenue.style.display="none"
  open.style.display ="block"
    close.style.display ="block"
})
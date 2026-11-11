let open = document.getElementById("open");
let nav = document.getElementById("linkz");
let close = document.getElementById("close");

open.addEventListener("click", function(){
    nav.classList.add("active");
    open.style.display="none";
    close.style.display="flex";
})
close.addEventListener("click", function(){
     open.style.display="block";
    close.style.display="block";
    nav.style.display="none";
})
// searchbox enlg start 
function srch(){
    let srchBx=document.getElementById("srhbox");
    let navlogo=document.getElementById("navba");
    srchBx.style.display = "block";
    navlogo.style.display = "none";
}
function srchEnd(){
    let srchBx=document.getElementById("srhbox");
    let navlogo=document.getElementById("navba");
    srchBx.style.display= "none";
    navlogo.style.display= "block";
}
// searchbox enlg end 
// nav shrink on scroll start
window.onscroll = function() {scrollFunction()};
 function scrollFunction() {
    let nav= document.getElementById("nav") ;
    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
        nav.style.height="52px";
        nav.style.top="0px";
        
    } else {
        nav.style.height="101px";
        
      }
}
// nav shrink on scroll end
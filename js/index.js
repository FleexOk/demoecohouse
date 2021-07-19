
const animbg = document.querySelector(".animbg");
var inNews = new Boolean(false);
let root = document.documentElement;
root.addEventListener("mousemove", e => {
    root.style.setProperty('--mouse-x', e.clientX + "px");
    root.style.setProperty('--mouse-y', e.clientY + "px");
});
const isHover = e => e.parentElement.querySelector(':hover') === e;    
const myDiv = document.getElementById('testing');
document.addEventListener('mousemove', function checkHover() {
  const hovered = isHover(myDiv);
  if (hovered !== checkHover.hovered) {
    if(hovered == 1)    { 
        if(inNews == false){
        document.getElementById("magicPointer").style.height="40px";
        document.getElementById("magicPointer").style.width="80px";
        document.getElementById("magicPointer").style.borderRadius="45%";
        document.getElementById("magicPointer").style.background="#ff0558";
        inNews = true;
        }
    } else  {
        if(inNews == true){
        document.getElementById("magicPointer").style.height="5px";
        document.getElementById("magicPointer").style.width="5px";
        document.getElementById("magicPointer").style.borderRadius="100%";
        document.getElementById("magicPointer").style.background="transparent";
        inNews = false;
        }
    }
    checkHover.hovered = hovered;
  }
}); 

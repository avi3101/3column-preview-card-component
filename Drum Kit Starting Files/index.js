for(var i=0;i<7;++i)
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var pressKey=this.innerHTML;
    checkPress(pressKey);
    addAnimation(pressKey);
});

document.addEventListener("keydown",function (event)
{
  checkPress(event.key);
  addAnimation(event.key);
})

function checkPress(key){
  
    switch(key)
    {
        case 'a':
            new Audio("sounds/tom-1.mp3").play();
            break;
        case 's':
            new Audio("sounds/tom-2.mp3").play();
            break;
        case 'd':
            new Audio("sounds/tom-3.mp3").play();
            break;
        case 'f':
            new Audio("sounds/tom-4.mp3").play();
            break;
        case 'j':
            new Audio("sounds/snare.mp3").play();
            break;
        case 'k':
            new Audio("sounds/crash.mp3").play();
            break;
        case 'l':
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:console.log(key);
    }
}

function addAnimation(value)
{
    var activeKey=document.querySelector("."+value);
    activeKey.classList.add("pressed");
    setTimeout(function ()
    {
        activeKey.classList.remove("pressed");
    },100);
}
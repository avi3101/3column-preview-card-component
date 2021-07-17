var random1=(1+Math.floor(6*Math.random()));
//console.log(random1);
if(random1===1)
document.querySelector("img.img1").setAttribute("src","images/dice1.png");
else if(random1===2)
document.querySelector("img.img1").setAttribute("src","images/dice2.png");
else if(random1===3)
document.querySelector("img.img1").setAttribute("src","images/dice3.png");
else if(random1===4)
document.querySelector("img.img1").setAttribute("src","images/dice4.png");
else if(random1===5)
document.querySelector("img.img1").setAttribute("src","images/dice5.png");
else
document.querySelector("img.img1").setAttribute("src","images/dice6.png");

var random2=(1+Math.floor(6*Math.random()));

if(random2===1)
document.querySelector("img.img2").setAttribute("src","images/dice1.png");
else if(random2===2)
document.querySelector("img.img2").setAttribute("src","images/dice2.png");
else if(random2===3)
document.querySelector("img.img2").setAttribute("src","images/dice3.png");
else if(random2===4)
document.querySelector("img.img2").setAttribute("src","images/dice4.png");
else if(random2===5)
document.querySelector("img.img2").setAttribute("src","images/dice5.png");
else
document.querySelector("img.img2").setAttribute("src","images/dice6.png");

if(random1>random2)
document.querySelector("h1").innerHTML="🏆Player 1 wins!";
else if(random1<random2)
document.querySelector("h1").innerHTML="Player 2 wins!🏆";
else
document.querySelector("h1").innerHTML="Match is drawn.";

let randomNumber1 = function(){
    return Math.floor(Math.random()*6)+1
}

let p1=randomNumber1()
document.querySelector(".img1").setAttribute("src",`images/dice${p1}.png`)

let p2= randomNumber1();
document.querySelector(".img2").setAttribute("src",`images/dice${p2}.png`);

let result = p1>p2?"player 1 wins 🚩": p2>p1 ? "player 2 wins 🚩" : "draw"

document.querySelector("h1").innerHTML=`${result}`
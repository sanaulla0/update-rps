let text = document.getElementById('text');

let play = document.getElementById('play');

let  rockbtn = document.getElementById('rock');
let paperbtn = document.getElementById('paper');
let scissorsbtn = document.getElementById('scissors');

let compchoiceElement = document.getElementById('compchoice');
let userchoiceElement = document.getElementById('userchoice');

let   userpoint = document.getElementById("userpoint");
let comppoint = document.getElementById('comppoint');
let roundsleft = document.getElementById('roundsleft');


let roundresult = document.getElementById('roundresult');

let gameresult = document.getElementById('finalres');

play.addEventListener('click',playgame);
rockbtn.addEventListener('click',use);
 paperbtn.addEventListener('click',use);
scissorsbtn.addEventListener('click',use);
let round =0;
let userpoints=0;
let cpoint=0;


function playgame(){
 round = text.value;
   // console.log('round.value');
if(round>0){
        document.getElementById("gamechanger").style.display = "block";
        document.getElementsByClassName('make')[0].style.display='none';
}
else{
 alert('Enter a value');
}

}

function use(e){
if(round>0){
console.log("user choice", e.target.value);

let userselect = e.target.value;
let choices = ['rock','paper','scissors'];
let compselect = choices[Math.floor(Math.random()*3)];
console.log("compchoice",compselect);

let roundres ='draw';

if((userselect ==='rock' && compselect==='scissors')||(userselect ==='paper' && compselect==='rock') || (userselect ==='scissors' && compselect==='paper') ){
    ++userpoints;
    userpoint.innerText=userpoints;
    --round;
roundres="WIN";
     
}
else if((compselect ==='rock' && userselect==='scissors')||(compselect ==='paper' && userselect==='rock') || (compselect==='scissors' && userselect==='paper') ){
    ++cpoint;
    --round;
roundres="LOSE";

}
else
{
     --round;
     roundres='draw';
}



compchoiceElement.innerHTML = compselect;

userchoiceElement.innerHTML = userselect;

userpoint.innerHtml = userpoints;
comppoint.innerHTML = cpoint;
roundsleft.innerHTML= round;
roundresult.innerHTML = roundres;

}

           

else{
  if(userpoint.innerHTML > comppoint.innerHTML){
    alert(" 🤩🤩😘😘💥💥💥💥 CONGRATULATIONS YOU WON");
}
else if(userpoint.innerHTML<comppoint.innerHTML)
{
 alert(" 😣😣😣  YOU  LOSS GAME OVER ");
// alert("computer win");
}
else{
   alert(" 🤷‍♂️🤷‍♂️🤷‍♂️ TIE ");
// alert("draw");
}

}


}

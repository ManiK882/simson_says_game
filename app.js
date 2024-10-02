let p = document.querySelector("p");
let level=0;

let btns =["yellow","red","green","blue"];

let gameSeq=[];
let userSeq=[];
let userColor;

let h4 = document.querySelector("h4");
let score=0;
//step 1: keyboard k koi v button click hone par game start ho jaye
let started=false;
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is stared");
        started=true;
        levelUp();
    }
});
//step 2:button flash by js and user differently andlevel up
function buttonFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
};
function levelUp(){
    userSeq=[];
    level++;
    p.innerText=`Level ${level}`;
    record();

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(`gameSeq ${gameSeq}`);
    buttonFlash(randBtn);
};

//step 3 checking the sequence
function checkAns(idx){
//console.log("curr level:",level);
// let idx = level-1;

if(userSeq[idx]===gameSeq[idx]){
    // console.log("same value");
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
    }
}
else{
    p.innerHTML=`Game over! your score is <b>${level}</b> <br>press any key to start the game`;
    document.querySelector("body").style.backgroundColor="pink";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },1000);
    resetGame();
}
};

//btn is flashed when user clicked
function buttonPress(){
    let btn = this;
    //console.log(btn);
    buttonFlash(btn);
    
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(`userSeq ${userSeq}`);
    checkAns(userSeq.length-1);
   
};
let allBtns = document.querySelectorAll(".boxes");
for(btn of allBtns){
   btn.addEventListener("click",buttonPress);
};

function record(){
    if(score<level){
        score=level;
        h4.innerText=`High Score is ${score}`;
    }
}
function resetGame(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
 

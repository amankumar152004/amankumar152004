let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const Userscore=document.querySelector("#user-score");
const Compscore=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const i=Math.floor(Math.random()*3);
    return options[i];
}
const drawGame=()=>{
    console.log("game was drawn.")
    msg.innerText="game drawn.play again";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you win.");
        msg.innerText=`you win!your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore += 1;
        Userscore.innerText=userScore;
    }else{
        console.log("you lose.");
        msg.innerText=`you lose!${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore += 1;
        Compscore.innerText=compScore;
    }
};
const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    const compChoice=genCompChoice();
    console.log("compChoice=",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice ==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });   
});
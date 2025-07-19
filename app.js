let userscr = 0;
let compscr = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userscrpara = document.querySelector("#user-score");
const compscrpara = document.querySelector("#comp-score");
const genCompCh = () =>{
    let options = ["rock","paper","scissors"];
    const randomId = Math.floor(Math.random() * 3);
    return options[randomId];
};
const draw = () =>{
    console.log("Game was a Draw");
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "#081B31";
};
const showWinner = (userwin,compchoice,userChoice) =>{
    if(userwin){
        console.log("you win");
        userscr++;
        userscrpara.innerText = userscr;
        msg.innerText = `You Win! ${userChoice} beats ${compchoice}`;

        msg.style.backgroundColor = "green";
    }else{
        console.log("you lost");
        compscr++;
        compscrpara.innerText = compscr;
        msg.innerText = `You Lost! ${compchoice} beats ${userChoice}`; 
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("userChoice = " , userChoice);
    const compchoice = genCompCh();
    console.log("computer choice = ", compchoice);
    if(userChoice === compchoice){
        draw();
    }else{
        userwin = true;
        if(userChoice === "rock"){
            userwin = compchoice === "paper"?false:true;
        }else if(userChoice === "paper"){
            userwin = compchoice === "scissors"?false:true;
        }else{
            userwin = compchoice === "rock"?false:true;
        }
        showWinner(userwin,compchoice,userChoice);
    }
};
choices.forEach((choice) => { 
    choice.addEventListener("click" ,()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
const userChoice=0;
let compChoice=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#caption");
const userC=document.querySelector("#you");
const compC=document.querySelector("#comp");
let u=0;
let c=0;
const playGame=(userChoice)=>{
    console.log("User choice is ",userChoice);
    const game=["rock","paper","scissors"];
    const randIndx=Math.floor(Math.random()*3);
    compChoice=game[randIndx];
    console.log("Computer's choice is ",compChoice);
    let userWin=true;
    if (userChoice===compChoice)
        {
            console.log("Game is draw");
            msg.innerText="Draw!Play Again "
        }
    else{
        if (userChoice==="rock")
            {
                userWin = compChoice==="paper" ?false:true;
            }
        else if (userChoice==="paper")
                {
                    userWin = compChoice==="scissors" ?false:true;
                }
         else
                    {
                        userWin = compChoice==="rock" ?false:true;
                    }

        if (userWin===true)
        {
            console.log("You win");
            msg.innerText="You scored ";
            userC.innerText=u+1;
            u=u+1;



        }
        else{
            console.log("You lose!!!");
            msg.innerText="You lost";
            compC.innerText=c+1;
            c=c+1;
        }
    if(u===10)
        {
            console.log("You win the match");
            msg.innerText="You win the match";
        }
    if (c==10)
        {
            console.log("You win the match");
            msg.innerText="You lost the match";
        }
}}


choices.forEach((choice)=>
    {
        console.log(choice)
        choice.addEventListener("click",()=>
            {
                const userChoice=choice.getAttribute("id");
      
                // console.log("Event was clicked",userChoice);
                playGame(userChoice);
            });
    });
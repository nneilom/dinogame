let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

//declaring variable for score
let interval = null;
let playerScore = 0;


//function for score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}


//startGame

window.addEventListener("keydown", (start) =>{
    if (start.code == "Space")
    {
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinie";
        cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinie";
        
        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter,200);

    }
});


    //jump Your Character
window.addEventListener("keydown", (e) => {
    //    console.log(e);

    if (e.key == " ")
        if (dino.classList != "dinoActive") {
            dino.classList.add("dinoActive");

            //                remove class after 0.5 seconds
            setTimeout(() => {
                dino.classList.remove("dinoActive");
            }, 500);
        }
});
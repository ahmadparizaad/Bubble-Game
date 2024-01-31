var timer = 60;
var score = 0;
var hitrn;
alert("Click the number that matches the number in the hit box. You have 60 seconds to get as many as you can. Good luck!");
function makeBubble () {
    var clutter = "";

    for (i=0; i<=95; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer () {
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML = `<div style={display: flex, flex-direction: column, align-items: center, justify-content: center}><br> <h1>Game Over</h1><h2>Your score is ${score}</h2></div>`

        }
    }, 1000)
}

function getNewHit () {
    hitrn = Math.floor(Math.random()*10);
        document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore () {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click", function(e){
    var clickedNum = Number(e.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        getNewHit();
        makeBubble();
    }
})

runTimer();
makeBubble();
getNewHit();

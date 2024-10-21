let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red", "darkcyan", "darkorange", "blue"];

let h3 = document.querySelector("h3")
let score = document.querySelector("h4");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game started")
        levelUp();
        started = true;

    }
});

function levelUp() {
    userSeq = [];
    level++;
    console.log(level)
    h3.innerText = `Level ${level}`;

    let random = Math.floor(Math.random() * 3)
    let btn = btns[random]
    let randomBtn = document.querySelector(`.${btn}`)
    gameSeq.push(btn);
    console.log(gameSeq)
    flash(randomBtn);
}



function flash(randomBtn) {
    randomBtn.classList.add("flash")
    setTimeout (() => {
        randomBtn.classList.remove("flash")
    }, 1000);
}

function userFlash(randomBtn) {
    randomBtn.classList.add("user")
    setTimeout (() => {
        randomBtn.classList.remove("user")
    }, 250);
}



function buttonPress() {
        let randomBtn = this
        userFlash(randomBtn);
        user = randomBtn.getAttribute("id");
        userSeq.push(user)
        checkAnswer(userSeq.length-1);

    
}

let allbtns = document.querySelectorAll(".btn")
for (const btn of allbtns) {
    btn.addEventListener("click", buttonPress)

};

let body = document.querySelector("body");
function checkAnswer(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            console.log("same value")
            body.classList.add("green");
            highest();
            setTimeout(() => {
                levelUp();
                body.classList.remove("green")
            }, 1000);

        }
    } else {
        console.log("not same value")
        body.classList.add("red");
        highest();
        setTimeout(() => {
            reset();
            body.classList.remove("red")
        }, 1000);
    }
};


function reset() {
    userSeq = [];
    level = 0;
    gameSeq = [];
    started = false;
    h3.innerText = "Game is Over!! Press any key to restart Game.";
};

function highest() {
    let storeLvl = 0;

    if (level => storeLvl ) {
        storeLvl = level;
        score.innerHTML = `Your highest <b>Level : ${level}</b>`;
    } else {
            score.innerHTML = `Your highest <b>Level else : ${storeLvl}</b>`;
            console.log("highest els");
    }
}
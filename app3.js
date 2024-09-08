let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector('h2');
document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 250);

}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randidx = Math.floor(Math.random() * 3);
    let randcolors = btns[randidx];
    let randbtn = document.querySelector(`.${randcolors}`)
    gameseq.push(randcolors);
    console.log(gameseq);

    btnFlash(randbtn);
}

function checkans(idx) {
    // console.log("curr level : ", level);

    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            if (userseq.length == gameseq.length) {
                setTimeout(levelUp, 500);
            }
        }

    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        reset();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
    }

}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkans(userseq.length - 1);

}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
document.getElementById("yesButton1").addEventListener("click", startAnimation);
document.getElementById("yesButton2").addEventListener("click", startAnimation);

function startAnimation() {
    // Hide question screen and show animation screen
    document.getElementById("questionScreen").style.display = "none";
    const animationScreen = document.getElementById("animationScreen");
    animationScreen.style.display = "block";

    // Launch doves and balloons
    for (let i = 0; i < 5; i++) {
        launchDove();
        createBalloon();
    }
}

function launchDove() {
    let dove = document.createElement('div');
    dove.classList.add('dove');
    dove.style.left = Math.random() * 100 + 'vw';
    dove.style.animation = `flyDove 5s linear infinite`;
    document.body.appendChild(dove);
}

function createBalloon() {
    let balloon = document.createElement('div');
    balloon.classList.add('balloon');
    let size = Math.random() * 60 + 20;
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    balloon.style.animation = `riseBalloon 5s linear infinite`;
    document.body.appendChild(balloon);
}

// Adding flying animations
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes flyDove {
    0% { bottom: 0; }
    100% { bottom: 100vh; }
}

@keyframes riseBalloon {
    0% { bottom: 0; }
    100% { bottom: 100vh; }
}`;

document.head.appendChild(styleSheet);

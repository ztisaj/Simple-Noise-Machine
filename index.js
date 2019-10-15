function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
window.addEventListener('keydown', playSound);

const mySoundQ = document.getElementById('audioQ');
const buttonQ = document.getElementById("keyQ");
buttonQ.addEventListener("click", function() {
                         mySoundQ.currentTime=0;
                         mySoundQ.play();
});

const mySoundW = document.getElementById('audioW');
const buttonW = document.getElementById("keyW");
buttonW.addEventListener("click", function() {
                         mySoundW.currentTime=0;
                         mySoundW.play();
});

const mySoundE = document.getElementById('audioE');
const buttonE = document.getElementById("keyE");
buttonE.addEventListener("click", function() {
                         mySoundE.currentTime=0;
                         mySoundE.play();
});

const mySoundA = document.getElementById('audioA');
const buttonA = document.getElementById("keyA");
buttonA.addEventListener("click", function() {
                         mySoundA.currentTime=0;
                         mySoundA.play();
});

const mySoundS = document.getElementById('audioS');
const buttonS = document.getElementById("keyS");
buttonS.addEventListener("click", function() {
                         mySoundS.currentTime=0;
                         mySoundS.play();
});

const mySoundD = document.getElementById('audioD');
const buttonD = document.getElementById("keyD");
buttonD.addEventListener("click", function() {
                         mySoundD.currentTime=0;
                         mySoundD.play();
});

const mySoundZ = document.getElementById('audioZ');
const buttonZ = document.getElementById("keyZ");
buttonZ.addEventListener("click", function() {
                         mySoundZ.currentTime=0;
                         mySoundZ.play();
});

const mySoundX = document.getElementById('audioX');
const buttonX = document.getElementById("keyX");
buttonX.addEventListener("click", function() {
                         mySoundX.currentTime=0;
                         mySoundX.play();
});

const mySoundC = document.getElementById('audioC');
const buttonC = document.getElementById("keyC");
buttonC.addEventListener("click", function() {
                         mySoundC.currentTime=0;
                         mySoundC.play();
});
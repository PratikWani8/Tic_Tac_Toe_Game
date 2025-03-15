// Background Music            
let bgm = new Audio ("./stranger-things-bgm.mp3");
window.onload = function () {
bgm.play();
}
 
// Button sound for Local click 
const sound1 = new Audio('./button-sound.wav');
const button1 = document.getElementById('Local');
button1.addEventListener('click', function() {
sound1.play();
});
 
// Button sound for Bot click   
const sound2 = new Audio('./button-sound.wav');
const button2 = document.getElementById('Bot');
button2.addEventListener('click', function() {
sound2.play();
});

/* Site-wide JS i den här filen (t.ex. huvudmenyn) */

console.log('main.js init'); // För att se att skriptet laddats in

//Tracking
navigator.geolocation.getCurrentPosition(success)

function success(pos) {
const location = pos.coords;

console.log(`Platform: ${navigator.platform}
Webbläsare: ${navigator.appName}
Resolution: ${screen.availWidth} x ${screen.availHeight}
Fönsterstorlek: ${window.innerWidth} x ${window.innerHeight}
Longitud: ${location.longitude}
Latitud : ${location.latitude}`);
    
  }



function gameCounter(){
if(localStorage.getItem('visitCount'))
{
    let currentCount = localStorage.getItem('visitCount');
    document.querySelector("#counter").innerText= `
    Du har besökt sidan ${localStorage.getItem('visitCount')} gånger.`;
    
    currentCount++;
    localStorage.setItem('visitCount', currentCount);

}else {
    localStorage.setItem('visitCount', 1);
}}

function ageButton() {
    const age = document.querySelector("#age").value;
    console.log(age);
    if (age < 18) {
        alert("Minimiåldern för att spela är 18")
    }
}

function cashButton() {
    const cash = document.querySelector("#cash").value;
    console.log(cash)
    cash.replace(",", ".")
}

function timeButton() {
    const d = new Date();
    let addhour = 0;
    let addmin = document.querySelector("#time").value;
    let time = document.querySelector("#time").value;
    if (time >= 60) {
        addhour = time / 60;
        console.log(addhour)
        addmin = 0;
    } else { addhour = 0; }

    let getmin = d.getMinutes() + Number(addmin)
    let gethr = d.getHours() + Number(addhour)

    if (getmin > 59) {
        getmin = getmin - 60;
        if (getmin < 10) { getmin = "0" + getmin }
        gethr = gethr + 1

    } else if (getmin < 10) { getmin = "0" + getmin }
    if (gethr > 23) { gethr = gethr - 24 }

    document.querySelector("#speltid").innerText = `Din speltid tar slut kl. ${gethr}:${getmin}`

} document.querySelector("#btn-time").addEventListener('click', timeButton);


let gameTimer = null
let timer = document.querySelector("#speltimer")

function timerHandler() {

    if (gameTimer) clearInterval(gameTimer);
    let startingMinutes = document.querySelector("#time").value
    let time = startingMinutes * 60;

    gameTimer = setInterval(function () {

        time--;

        let minutes = Math.floor(time / 60);
        let hours = Math.floor(minutes / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        hours = hours < 10 ? '0' + hours : hours;

        timer.innerHTML = `${hours}:${minutes}:${seconds}`;

        console.log(time)

        if (time <= 0) {
            clearInterval(gameTimer);
            timer.innerText = "Tiden är ute"
        }
    }, 1000)
} document.querySelector("#btn-time").addEventListener('click', timerHandler);

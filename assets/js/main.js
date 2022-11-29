/* Site-wide JS i den här filen (t.ex. huvudmenyn) */

console.log('main.js init'); // För att se att skriptet laddats in

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

/*function timeButton(){
    const d = new Date();
    let addhour = 0;
    let addmin = document.querySelector("#time").value;
    let time = document.querySelector("#time").value;
    if(time>=60)
    {
        addhour = time/60;
        console.log(addhour)
        addmin = 0;
    }else{addhour = 0;}

    let getmin = d.getMinutes()+Number(addmin)
    let gethr = d.getHours()+Number(addhour)

    if(getmin>59)
    {
        getmin = getmin-60;
        if(getmin<10){getmin="0"+getmin}
        gethr = gethr + 1
        
    }else if(getmin<10){if(getmin<10){getmin="0"+getmin}}
    
    
    document.querySelector("#speltid").innerText = `Din speltid tar slut om ${time} minuter,
     dvs kl. ${gethr}:${getmin}`
     
}*/

/*function gameTimer(){
       console.log("Game timer INIT")
        const outputElem = document.querySelector("#speltimer");
        let gameTimer = null

        
            if (gameTimer) clearInterval(gameTimer);

            let minLeft = Number(document.querySelector("#time").value);

            gameTimer = setInterval(function ()
            {
                outputElem.innerText = minLeft;
                minLeft--;
                console.log(minLeft)

                if (minLeft <= 0) {
                    clearInterval(gameTimer);
                    outputElem.innerText = "Tiden är ute"
                }
            }(), 1000);
        } */




/*        function gameTimer() 
{
    console.log("gameTimer INIT")
    let timer = document.querySelector("#speltimer")
    let gameTimer = null

    
    document.querySelector("#btn-time").addEventListener('click', () => timerHandler());
}document.querySelector("#btn-time").addEventListener('click', gameTimer); */

function timerHandler(){
    let gameTimer = null
    if (gameTimer) clearInterval(gameTimer);

    let startingMinutes = document.querySelector("#time").value
    let time = startingMinutes * 60;
    
    gameTimer = setInterval(function () {
        

        let timer = document.querySelector("#speltimer")
        
        time--;

        let minutes = Math.floor(time / 60);
        let hours = Math.floor(minutes / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        hours = hours < 10 ? '0' + hours : hours;

        timer.innerHTML = `${hours}:${minutes}:${seconds}`;
        
        console.log(startingMinutes)

        
        }, 1000)
    }document.querySelector("#btn-time").addEventListener('click', timerHandler);

/* Site-wide JS i den här filen (t.ex. huvudmenyn) */

console.log('main.js init'); // För att se att skriptet laddats in

function ageButton(){
    const age = document.querySelector("#age").value;
    console.log(age);
    if(age<18){
        alert("Minimiåldern för att spela är 18")
    }
}

function cashButton(){
    const cash = document.querySelector("#cash").value;
    console.log(cash)
    cash.replace(",", ".")
}

function timeButton(){
    const time = document.querySelector("#time").value;
    console.log(`Time: ${time}`)
}
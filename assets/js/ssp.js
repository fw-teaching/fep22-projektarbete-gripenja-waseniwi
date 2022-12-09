/* Exempel på JS-fil för specifik sida (ssp-sidan i det här fallet) */

console.log('ssp.js init'); // För att se att skriptet laddats in

const ssp = [
    { Name: "Sten", W: "Sax", L: "Påse" },
    { Name: "Sax", W: "Påse", L: "Sten" },
    { Name: "Påse", W: "Sten", L: "Sax" },
];

//Knappskapare
for (item of ssp) {
    document.querySelector("#ssp").innerHTML += `
    <input id="${item.Name}" type="button" value="${item.Name}">`
}



//bet button
/*
let bet = document.querySelector("#insats");
document.querySelector("#btn-bet").addEventListener('click', () => {
    bet = document.querySelector("#insats");
    console.log(`Du satsar ${bet.value} pengar`)
    if (cash > bet) {
        console.log(`2. Du satsar ${bet} pengar`)
    } else if (cash <= 0) { alert("Du har inga pengar!") }
    else if (bet > cash) { alert("För stor insats") }
}) */

let bet = Number(document.querySelector("#insats").value);
function betButton() { 
    bet = Number(document.querySelector("#insats").value);
    if(bet<=0){alert("För liten insats"); document.querySelector("#insats").value=0;}
    else{
    console.log(`Du satsar ${bet} pengar`)
    console.log(bet)
    if (bet>cash){document.querySelector("#insats").value=0; alert("för lite pengar"); console.log("bet: "+bet)}
}
} document.querySelector("#btn-bet").addEventListener('click', betButton);

//Spellogik
document.querySelectorAll(`#ssp > input`).forEach((elem) => {
    elem.addEventListener('click', () => {
        if (document.querySelector("#insats").value>cash){document.querySelector("#insats").value=0; alert("för lite pengar"); console.log("bet: "+bet+" cash: "+cash)}
        if(bet<=0){alert("För liten insats"); document.querySelector("#insats").value=0;}

        const random = ssp[Math.floor(Math.random() * ssp.length)];
        console.log("Datorn valde " + random.Name)
        ssp.forEach(item => {
            let bet = Number(document.querySelector("#insats").value);
            if (elem.value == item.Name) {
                if (item.W === random.Name) {
                    console.log("WIN");
                    cash += bet * 2;
                    console.log(`Du har ${cash}`)
                    document.querySelector("#currentcash").innerHTML=`Du har ${Number(cash)} pengar`
                }
                else if (item.L === random.Name) {
                    console.log("LOSE")
                    cash -= bet;
                    console.log(`Du har ${cash}`)
                    document.querySelector("#currentcash").innerHTML=`Du har ${Number(cash)} pengar`
                }
                else { console.log("DRAW") }
            }
        })
    })
});


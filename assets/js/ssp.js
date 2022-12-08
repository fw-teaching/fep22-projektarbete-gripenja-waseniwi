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
let bet = Number(document.querySelector("#insats").value);

document.querySelector("#btn-bet").addEventListener('click', () => {
    bet = Number(document.querySelector("#insats").value);
    if (Number(cash.value) > bet) {
        console.log(`Du satsar ${bet} pengar`)
    } else if (currentcash <= 0) { alert("Du har inga pengar!") }
    else if (bet > Number(currentcash)) { alert("För stor insats") }
    bet = Number(document.querySelector("#insats").value);

})

//Spellogik
document.querySelectorAll(`#ssp > input`).forEach((elem) => {
    elem.addEventListener('click', () => {
        const random = ssp[Math.floor(Math.random() * ssp.length)];
        console.log("Datorn valde " + random.Name)
        ssp.forEach(item => {
            if (elem.value == item.Name) {
                if (item.W === random.Name) {
                    console.log("WIN");
                    currentcash = cash += bet * 2;
                    console.log(`Du har ${currentcash}`)
                    document.querySelector("#currentcash").innerHTML = `Du har ${cash} pengar`
                }
                else if (item.L === random.Name) {
                    console.log("LOSE")
                    currentcash = cash -= bet;
                    console.log(`Du har ${currentcash}`)
                    document.querySelector("#currentcash").innerHTML = `Du har ${cash} pengar`
                }
                else { console.log("DRAW") }
            }
        })
    })
});


const memory = [
    {card:"c1", id: "1"},
    {card:"c2", id: "2"},
    {card:"c3", id: "3"},
    {card:"c4", id: "4"},
    {card:"c5", id: "1"},
    {card:"c6", id: "2"},
    {card:"c7", id: "3"},
    {card:"c8", id: "4"}
]
let i=0;
while(i<8) {
    let randomid = memory[Math.floor(Math.random() * memory.length)];
    if(document.querySelector(`.${randomid.card}`) !==null){ 
    }else{
        document.querySelector("#memory").innerHTML += `
        <img class="${randomid.card}" id="${randomid.id}" src="/assets/images/card_back.png"  style="border: 0px;" >`;
        i++
    }
}



document.querySelectorAll('#memory > img').forEach((elem) => {
    elem.addEventListener('mouseover', (evt) => {
        evt.target.style.border = '5px solid red';
    });
    elem.addEventListener('mouseout', (evt) => {
        evt.target.style.border = '0px';
    });
});

document.querySelectorAll('#memory > img').forEach((elem) => {
    const front = `/assets/images/card_${elem.id}.png`;
    const back = `/assets/images/card_back.png`;
    let state = true;
    let img = elem;
    elem.addEventListener('click', () => {
        if (state) {
            elem.setAttribute("src", front);
            state = false;
        } else {
            elem.setAttribute("src", back);
            state = true;
        }
    })
}
);


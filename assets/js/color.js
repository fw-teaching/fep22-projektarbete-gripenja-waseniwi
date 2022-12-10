console.log("color.js init")
function changeColor(){
    let red = document.querySelector("#sliderRed").value;
    let green = document.querySelector("#sliderGreen").value;
    let blue = document.querySelector("#sliderBlue").value;
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.body.style.color = color;
}
document.querySelector("#sliderRed").addEventListener('input',changeColor);
document.querySelector("#sliderGreen").addEventListener('input',changeColor);
document.querySelector("#sliderBlue").addEventListener('input',changeColor);

let dropdown = document.querySelector('#select');

dropdown.addEventListener('change', function () {
    const color = dropdown.value;
    if(color === 'default'){
        document.body.style.backgroundColor = '#ffffff';
    }else {
        document.body.style.backgroundColor = color;
    }
}) 
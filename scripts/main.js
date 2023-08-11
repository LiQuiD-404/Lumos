let background_syntax = '';
const color1Preview = document.getElementById('color1Preview');
const color2Preview = document.getElementById('color2Preview');
let col1 = '';
let col2 = '';

function generate() {
    document.getElementById("welcome").style.visibility = "hidden";
    let element = document.getElementById("gradient");
    col1 = generateRandomHexColor();
    color1Preview.style.backgroundColor = col1;
    col2 = generateRandomHexColor();
    color2Preview.style.backgroundColor = col2;
    const direction_options = ['right', 'bottom', 'top', 'left', 'left top', 'right top'];
    let rand_number = Math.floor(Math.random() * 6);
    let direction = direction_options[rand_number];
    console.log(direction);
    grad = `linear-gradient(to ${direction}, ${col1}, ${col2})`
    element.style.backgroundImage = grad;
    background_syntax = `background: ${grad};`
}

function generateRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function copy() {
    if (grad.length == 0) {
        alert("Please generate a gradient first!");
    }
    else {
        navigator.clipboard.writeText(background_syntax);
        alert("Copied to Clipboard. Enjoy!");
    }
}


color1Preview.addEventListener('click', copy_col1);
color2Preview.addEventListener('click', copy_col2);

function copy_col1(){
    if(col1 != ''){
        navigator.clipboard.writeText(col1);
        alert("Copied color to clipboard!")
    }
}

function copy_col2(){
    if(col2 != ''){
        navigator.clipboard.writeText(col2);
        alert("Copied color to clipboard!")
    }
}


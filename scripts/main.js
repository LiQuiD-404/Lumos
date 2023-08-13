let background_syntax = '';
const color1Preview = document.getElementById('color1Preview');
const color2Preview = document.getElementById('color2Preview');
const color1_mobile = document.getElementById('color1_mobile');
const color2_mobile = document.getElementById('color2_mobile');
let col1 = '';
let col2 = '';

function generate() {
    document.getElementById("welcome").style.visibility = "hidden";
    let element = document.getElementById("gradient");
    col1 = generateRandomHexColor();
    color1Preview.style.backgroundColor = col1;
    color1_mobile.style.backgroundColor = col1;
    col2 = generateRandomHexColor();
    color2Preview.style.backgroundColor = col2;
    color2_mobile.style.backgroundColor = col2;
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
    if (background_syntax.length == 0) {
        alert("Please generate a gradient first!");
    }
    else {
        navigator.clipboard.writeText(background_syntax);
        document.getElementById('popup').style.visibility = 'visible'
        let blur = document.getElementById("welcome");
        console.log(blur)
        classlist = blur.classList;
        classlist.add('blur-2xl')
        timeout = setTimeout(hide, 800);
    }
}


color2Preview.addEventListener('click', copy_col2);
color1Preview.addEventListener('click', copy_col1);
color1_mobile.addEventListener('click', copy_col1);
color2_mobile.addEventListener('click', copy_col2);

function copy_col1() {
    if (col1 != '') {
        navigator.clipboard.writeText(col1);
        var audio = new Audio('assets/chime.mp3');
        audio.play();
        document.getElementById('popup').style.visibility = 'visible'
        let blur = document.getElementById("welcome");
        console.log(blur)
        classlist = blur.classList;
        classlist.add('blur-2xl')
        timeout = setTimeout(hide, 800);
    }
}

function copy_col2() {
    if (col2 != '') {
        navigator.clipboard.writeText(col2);
        var audio = new Audio('assets/chime.mp3');
        audio.play();
        document.getElementById('popup').style.visibility = 'visible'
        let blur = document.getElementById("welcome");
        console.log(blur)
        classlist = blur.classList;
        classlist.add('blur-2xl')
        timeout = setTimeout(hide, 800);
    }
}

let timeout;
let classlist;

function test() {
    document.getElementById('popup').style.visibility = 'visible'
    let blur = document.getElementById("welcome");
    console.log(blur)
    classlist = blur.classList;
    classlist.add('blur-2xl')
    timeout = setTimeout(hide, 800);

}

function hide() {
    document.getElementById('popup').style.visibility = 'hidden'
    classlist.remove('blur-2xl')

    clearTimeout(timeout)
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


let animate = gsap.timeline();

animate.from("#welcome", {
    y: 700,
    opacity:0,
    duration: 0.5,
    delay: 0.6
})
animate.to("#head", {
    color: "#c0d5fc"
})

gsap.from("#navb,#navb_mobile", {
    y: -100,
    opacity:0,
    duration: 0.5,
    delay: 0.5
})


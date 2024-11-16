let curtain = document.getElementById("curtain");
let light = document.getElementById("light");
let girl = document.getElementById("girl");
let rabbit = document.getElementById("rabbit");
let hat = document.getElementById("hat");
let pigeon = document.getElementById("pigeon");
let dergalka = document.getElementById("dergalka");

let light_switch = 0;


document.querySelector('#img_curtain').onclick = function () {
    curtain.style.transitionDuration = '1s'
    curtain.style.bottom = '100%';
};

document.querySelector('#img_lamp').onclick = function () {
    if (!light_switch){
        light.style.opacity = '50%';
        girl.style.opacity = '100%';
        rabbit.style.opacity = '100%';
        hat.style.opacity = '100%';
        pigeon.style.opacity = '100%';
        light_switch = 1;
    }
    else{
        light.style.opacity = '0%';
        girl.style.opacity = '0%';
        rabbit.style.opacity = '0%';
        hat.style.opacity = '0%';
        pigeon.style.opacity = '0%';
        light_switch = 0;
    }
}

document.querySelector('#img_rabbit').onclick = function () {
    rabbit.style.transitionDuration = '1s';
    rabbit.style.top = '63%';
    setTimeout(PigeonUp, 1000);
    rabbit.style.transitionDuration = '.2s';
}

document.querySelector('#img_pigeon').onclick = function () {
    pigeon.style.transitionDuration = '1s';
    pigeon.style.top = '62%';
    setTimeout(RabbitUp, 1000);
    pigeon.style.transitionDuration = '.2s';
}

function PigeonUp() {
    pigeon.style.transitionDuration = '0.5s';
    pigeon.style.top = '50%';
    pigeon.style.transitionDuration = '.2s';
}

function RabbitUp() {
    rabbit.style.transitionDuration = '0.5s';
    rabbit.style.top = '50%';
    rabbit.style.transitionDuration = '.2s';
}

document.querySelector('#img_lamp').onmousedown = function () {
    dergalka.style.top = '5%';
}
document.querySelector('#img_lamp').onmouseup = function () {
    dergalka.style.top = '3%';
}

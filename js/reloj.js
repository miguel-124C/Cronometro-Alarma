const time = document.getElementById("tiempo-reloj");

const relojHoras = document.querySelector(".reloj-hora");
const relojMinutos = document.querySelector(".reloj-minuto");
const relojSegundos = document.querySelector(".reloj-segundo");

const clock = setInterval(()=>{
    const reloj = new Date();
    let i= 0;
    for(hours of time.children){
        hours.textContent = reloj.toLocaleTimeString().split(":")[i];
        i++;
    }
},50);
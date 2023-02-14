/*Temporizador objetos*/
const temporizadorHora = document.querySelector(".temporizador-hora");
const temporizadorMinuto = document.querySelector(".temporizador-minuto");
const temporizadorSegundo = document.querySelector(".temporizador-segundo");

const inputHora = document.querySelector(".disminuir-hora");
const inputMinuto = document.querySelector(".disminuir-minuto");
const inputSegundo = document.querySelector(".disminuir-segundo");

const btnPLayTemporizador = document.querySelector(".temporizador-iniciar");
const btnRefreshTemporizador = document.querySelector(".temporizador-reiniciar");
/*temporizador funciones*/
let iniciaroNo = true;
let intervaloSegundo;
let intervaloMinuto;
let intervaloHora;

const soloNumbers=(input,rango,number)=>{
    let numeroAct = input.value + "" + number;
    if(number >= 0 && number <= 9){
        if(numeroAct < rango){
            input.value += number;
        }
    }
}
const getTimeADisminuir=()=>{
    return [inputHora.value,inputMinuto.value,inputSegundo.value];
}
const disminuir = (tiempoADisminuir,tiempoFinal)=>{
    let limite = 0;
    intervaloSegundo = setInterval(() => {
        if(limite <= tiempoFinal){
            if(tiempoADisminuir[2] < 10){
                temporizadorSegundo.textContent = "0" + tiempoADisminuir[2];
            }else{
                temporizadorSegundo.textContent = tiempoADisminuir[2];
            }
            tiempoADisminuir[2]--;
            if(tiempoADisminuir[2] == -1){
                tiempoADisminuir[2] = 59;
            }
            limite++;
        }
    }, 1000);
}
const convertir=(hora,minuto,segundo)=>{
    return r = (hora*3600) + (minuto*60) + (segundo*1);

}

const altPlayPause=(clase,btnAgain,plPa)=>{
    btnPLayTemporizador.firstElementChild.classList.replace(clase[0],clase[1]);
    btnRefreshTemporizador.disabled = btnAgain;
    iniciaroNo = plPa;
}
const iniciarDescuento=()=>{
    let tiempoADisminuir = getTimeADisminuir();
        if(iniciaroNo){
            let tiempoFinal = convertir(tiempoADisminuir[0],tiempoADisminuir[1],tiempoADisminuir[2]);
            altPlayPause(["fa-play","fa-pause"],false,false);
            disminuir(tiempoADisminuir,tiempoFinal);
        }else{
            altPlayPause(["fa-pause","fa-play"],true, true);  
        }
}

/*Eventos*/
inputHora.addEventListener("keypress",(e)=>{
    e.preventDefault();
    soloNumbers(inputHora,100,e.key);
});
inputMinuto.addEventListener("keypress",(e)=>{
    e.preventDefault();
    soloNumbers(inputMinuto,60,e.key);
});
inputSegundo.addEventListener("keypress",(e)=>{
    e.preventDefault();
    soloNumbers(inputSegundo,60,e.key);
});

btnPLayTemporizador.addEventListener("click",iniciarDescuento);
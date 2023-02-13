/*Objetos Cronometro*/
const mSegundo=document.querySelector(".milisegundo");
const seg=document.querySelector(".segundo");
const min=document.querySelector(".minuto");

const btnCronometro = document.querySelector(".section__cronometro");
const btnTemporizador = document.querySelector('.section__temporizador');
const btnReloj = document.querySelector(".section__reloj");

const btnReiniciar = document.querySelector(".reiniciar");
const btnIniciar = document.querySelector(".iniciar");
const btnVueltas = document.querySelector(".vueltas");
const marcaDeTiempo = document.querySelector(".marca-de-tiempo");
/*Cronometro funcinoes*/
let minuto = "00";
let segundo = "00";
let milisegundo = "0";

let cronometro;
let playPause = true;
let vueltas = 1;
btnVueltas.disabled = true;
btnReiniciar.disabled = true;

const alternarPlayPause=(clase,btnAgain,btnVuel,plPa)=>{
    btnIniciar.firstElementChild.classList.replace(clase[0],clase[1]);
    btnReiniciar.disabled = btnAgain;
    btnVueltas.disabled = btnVuel;
    playPause = plPa;
}
const iniciarPausar=()=>{
    if(playPause){
        alternarPlayPause(["fa-play","fa-pause"],true,false,false);
        cronometro = setInterval(() => {
            mSegundo.textContent = milisegundo;
            if (milisegundo == 10){
                milisegundo = "0";
                mSegundo.textContent=milisegundo;
                segundo++;
                if (segundo<10){
                    segundo = '0'+segundo;
                } 
                if (segundo == 60) {
                    segundo = "00";
                    minuto++;
                    if (minuto<10){
                        minuto = '0'+minuto;
                    } 
                }
                seg.textContent = segundo;   
                min.textContent = minuto;
            }
            milisegundo++;
        }, 100);
    }else{
        clearInterval(cronometro);
        alternarPlayPause(["fa-pause","fa-play"],false,true,true);
    }
}
const reiniciar=()=>{
    btnReiniciar.disabled = true;
    minuto = "00";
    segundo = "00";
    milisegundo = "0";
    vueltas = 1;
    marcaDeTiempo.innerHTML = ``;
    mSegundo.textContent = milisegundo;
    seg.textContent = segundo;   
    min.textContent = minuto;
    clearInterval(cronometro);
}
const showTime=()=>{
    const dataContainer = document.createElement("div");
    dataContainer.classList.add("data-time");
    const numVueltas = document.createElement("div");
    const timepoMarcado = document.createElement("div");
    if(milisegundo == 10){
        milisegundo = "0"
    }
    numVueltas.innerHTML = `vuelta ${vueltas} <br>(tiempo transcurrido)`;
    timepoMarcado.textContent = `${minuto} : ${segundo} : ${milisegundo}`;
    dataContainer.appendChild(numVueltas);
    dataContainer.appendChild(timepoMarcado);
    vueltas++;
    marcaDeTiempo.appendChild(dataContainer);
}

/*--------------------------------------------------------------------------------------------------------*/
/*Cronometro Eventos*/
btnIniciar.addEventListener("click",iniciarPausar);
btnReiniciar.addEventListener("click",reiniciar);
btnVueltas.addEventListener("click",showTime);

btnCronometro.addEventListener("click",()=>{
    btnCronometro.classList.add("section__select");
    btnTemporizador.classList.remove("section__select");
    btnReloj.classList.remove("section__select");
});
btnTemporizador.addEventListener("click",()=>{
    btnCronometro.classList.remove("section__select");
    btnTemporizador.classList.add("section__select");
    btnReloj.classList.remove("section__select");
});
btnReloj.addEventListener("click",()=>{
    btnCronometro.classList.remove("section__select");
    btnTemporizador.classList.remove("section__select");
    btnReloj.classList.add("section__select");
});
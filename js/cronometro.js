/*Objetos Cronometro*/
const mSegundo=document.querySelector(".cronometro-milisegundo");
const seg=document.querySelector(".cronometro-segundo");
const min=document.querySelector(".cronometro-minuto");

const btnReiniciar = document.querySelector(".cronometro-reiniciar");
const btnIniciar = document.querySelector(".cronometro-iniciar");
const btnVueltas = document.querySelector(".cronometro-vueltas");
const marcaDeTiempo = document.querySelector(".marca-de-tiempo");
/*Cronometro funcinoes*/
let cronometroMinuto = "00";
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
const cronometroIniciarPausar=()=>{
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
                    cronometroMinuto++;
                    if (cronometroMinuto<10){
                        cronometroMinuto = '0'+cronometroMinuto;
                    } 
                }
                seg.textContent = segundo;   
                min.textContent = cronometroMinuto;
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
    cronometroMinuto = "00";
    segundo = "00";
    milisegundo = "0";
    vueltas = 1;
    marcaDeTiempo.innerHTML = ``;
    mSegundo.textContent = milisegundo;
    seg.textContent = segundo;   
    min.textContent = cronometroMinuto;
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
    timepoMarcado.textContent = `${cronometroMinuto} : ${segundo} : ${milisegundo}`;
    dataContainer.appendChild(numVueltas);
    dataContainer.appendChild(timepoMarcado);
    vueltas++;
    marcaDeTiempo.appendChild(dataContainer);
}

/*--------------------------------------------------------------------------------------------------------*/
/*Cronometro Eventos*/
btnIniciar.addEventListener("click",cronometroIniciarPausar);
btnReiniciar.addEventListener("click",reiniciar);
btnVueltas.addEventListener("click",showTime);
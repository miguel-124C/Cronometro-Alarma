let minuto = "00";
let segundo = "00";
let milisegundo = "0";

let cronometro;
let playPause = true;

const mSegundo=document.querySelector(".milisegundo");
const seg=document.querySelector(".segundo");
const min=document.querySelector(".minuto");

const btnReiniciar = document.querySelector(".reiniciar");
const btnIniciar = document.querySelector(".iniciar");
const btnVueltas = document.querySelector(".vueltas");

btnVueltas.disabled = true;
btnReiniciar.disabled = true;

const iniciar=()=>{
    if(playPause){
        btnIniciar.textContent = "pausar";
        btnReiniciar.disabled = true;
        btnVueltas.disabled = false;
        playPause = false;
        cronometro = setInterval(() => {
            mSegundo.textContent = milisegundo;
            if (milisegundo == 10){
                milisegundo = 0;
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
        btnIniciar.textContent = "iniciar";
        btnVueltas.disabled = true;
        btnReiniciar.disabled = false;
        playPause = true;
    }
}
const reiniciar=()=>{
    btnReiniciar.disabled = true;
    minuto = "00";
    segundo = "00";
    milisegundo = "00";
    mSegundo.textContent = milisegundo;
    seg.textContent = segundo;   
    min.textContent = minuto;
    clearInterval(cronometro);
}

btnIniciar.addEventListener("click",iniciar);
btnReiniciar.addEventListener("click",reiniciar);
/*Temporizador objetos*/
const temporizadorHora = document.querySelector(".temporizador-hora");
const temporizadorMinuto = document.querySelector(".temporizador-minuto");
const temporizadorSegundo = document.querySelector(".temporizador-segundo");

const inputHora = document.querySelector(".disminuir-hora");
const inputMinuto = document.querySelector(".disminuir-minuto");
const inputSegundo = document.querySelector(".disminuir-segundo");

const btnPLayTemporizador = document.querySelector(".temporizador-iniciar");
const btnRefreshTemporizador = document.querySelector(".temporizador-reiniciar");
const modelEndTemp = document.querySelector(".model-end-temp");
/*temporizador funciones*/
let iniciaroNo = true;
let limite = 0;
let intervaloSegundo;
let horaMostrada, minutoMostrado, segundoMostrado;
let limiteFinal;

const soloNumbers=(input,rango,number)=>{
    let numeroAct = input.value + "" + number;
    if(number >= 0 && number <= 9){
        if(numeroAct < rango){
            input.value += number;
        }
    }
}
const mostrarTiempo = (tiempo,obj)=>{
    if(tiempo)
        if(tiempo < 10) obj.textContent = "0" + parseInt(tiempo);
        else obj.textContent = parseInt(tiempo);
    else         
        obj.textContent = "00";
}
const disminuir = (limiteFinal)=>{
    intervaloSegundo = setInterval(() => {
        if(limite < limiteFinal){
            segundoMostrado--;
            if(segundoMostrado == -1){
                segundoMostrado = 59;
                minutoMostrado--;
                if(minutoMostrado == -1){
                    minutoMostrado = 59;
                    horaMostrada--;
                    mostrarTiempo(horaMostrada,temporizadorHora);
                }
                mostrarTiempo(minutoMostrado,temporizadorMinuto);
            }
            mostrarTiempo(segundoMostrado,temporizadorSegundo);
            limite++;
        }else {
            altPlayPause(["fa-pause","fa-play"],true,false);
            reiniciarTemporizador();
            modelEndTemp.style.display = "flex";
            modelEndTemp.addEventListener("click",()=>modelEndTemp.style.display = "none");
            clearInterval(intervaloSegundo);                      
        };
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
const setTiempo=()=>{
    if(inputHora.disabled == false && inputMinuto.disabled == false && inputSegundo.disabled == false){
        horaMostrada = inputHora.value;
        minutoMostrado = inputMinuto.value;
        segundoMostrado = inputSegundo.value;
        limiteFinal = convertir(inputHora.value,inputMinuto.value,inputSegundo.value);
        mostrarTiempo(horaMostrada,temporizadorHora);
        mostrarTiempo(minutoMostrado,temporizadorMinuto);
        mostrarTiempo(segundoMostrado,temporizadorSegundo);
    }
}
const iniciarDescuento=()=>{
        if(iniciaroNo){
            setTiempo();
            inputHora.disabled = true;
            inputMinuto.disabled = true;
            inputSegundo.disabled = true;
            altPlayPause(["fa-play","fa-pause"],true,false);
            disminuir(limiteFinal);
        }else{
            altPlayPause(["fa-pause","fa-play"],false, true);  
            clearInterval(intervaloSegundo);
        }
}
const reiniciarTemporizador=()=>{
    iniciaroNo = true;
    btnRefreshTemporizador.disabled = true;
    inputHora.disabled = false;
    inputMinuto.disabled =  false;
    inputSegundo.disabled = false;
    temporizadorHora.textContent = "00";
    temporizadorMinuto.textContent = "00";
    temporizadorSegundo.textContent = "00";
    limite = 0;
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
btnRefreshTemporizador.addEventListener("click",reiniciarTemporizador);
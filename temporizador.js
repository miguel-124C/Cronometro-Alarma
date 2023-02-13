/*Temporizador objetos*/
const temporizadorHora = document.querySelector(".hora");
const temporizadorMinuto = document.querySelector(".min");
const temporizadorSegundo = document.querySelector(".seg");
/*temporizador funciones*/
let hora = "00";
let segundo = "00";
let milisegundo = "0";

const verificar=(e)=>{
    console.log(e);
}
/*Temporizador Eventos*/
temporizadorHora.addEventListener("keypress",verificar);
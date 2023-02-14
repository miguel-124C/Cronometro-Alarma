const btnCronometro = document.querySelector(".section__cronometro");
const btnTemporizador = document.querySelector('.section__temporizador');
const btnReloj = document.querySelector(".section__reloj");
const btnAlarma = document.querySelector(".section__alarma");

btnCronometro.addEventListener("click",()=>{
    btnCronometro.classList.add("section__select");
    btnTemporizador.classList.remove("section__select");
    btnReloj.classList.remove("section__select");
    btnAlarma.classList.remove("section__select");
});
btnTemporizador.addEventListener("click",()=>{
    btnCronometro.classList.remove("section__select");
    btnTemporizador.classList.add("section__select");
    btnReloj.classList.remove("section__select");
    btnAlarma.classList.remove("section__select");
});
btnReloj.addEventListener("click",()=>{
    btnCronometro.classList.remove("section__select");
    btnTemporizador.classList.remove("section__select");
    btnReloj.classList.add("section__select");
    btnAlarma.classList.remove("section__select");
});
btnAlarma.addEventListener("click",()=>{
    btnCronometro.classList.remove("section__select");
    btnTemporizador.classList.remove("section__select");
    btnReloj.classList.remove("section__select");
    btnAlarma.classList.add("section__select");
});
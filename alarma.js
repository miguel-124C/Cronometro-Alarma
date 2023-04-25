const listAlarms = document.querySelector(".list-alarms");
const btnAddAlarma = document.querySelector(".btn-addAlarma");
const formAlarm = document.querySelector(".menu-add-alarm");
const inputTimeAlarm = document.querySelector(".time-alarm");
const inputMotivoAlarm = document.querySelector(".motivo-alarm");
const alarmMessage = document.querySelector(".alarm-message");

const alarms = [];

const verificarAlarm = setInterval(() => {
    const hora = new Date().toLocaleTimeString().substring(0,5);
    for (let i = 0; i < alarms.length; i++) {
        if(hora == alarms[i][0]){
            alarmMessage.style.display = "flex";
            alarmMessage.firstElementChild.textContent = `${alarms[i][1]}`;
        }else alarmMessage.style.display = "none";
    }
}, 1000);

const validarForm=()=>{
    return inputTimeAlarm.value.trim()!= "" && inputMotivoAlarm.value.trim() != "";
}
const mostrarAlarms=()=>{
    const div = document.createElement("div");
    div.classList.add(`${alarms.length - 1}`,"alarms-items");
    div.innerHTML = `
        <div>
            ${alarms[alarms.length - 1][0]}
        </div>
        <div>
            ${alarms[alarms.length - 1][1]}
        </div>
    `;
    listAlarms.appendChild(div);
}
const guardarData=()=>{
    let time = [inputTimeAlarm.value,inputMotivoAlarm.value];
    alarms.push(time);
    console.log(alarms);
    mostrarAlarms();
}

btnAddAlarma.addEventListener("click",()=>{
    formAlarm.style.display = "flex";
});

formAlarm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if (validarForm()) {
        guardarData();
        formAlarm.style.display = "none";   
    }
});
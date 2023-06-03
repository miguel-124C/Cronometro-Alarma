const listAlarms = document.querySelector(".list-alarms");
const btnAddAlarma = document.querySelector(".btn-addAlarma");
const formAlarm = document.querySelector(".menu-add-alarm");
const textAddEdit = document.querySelector(".text-add-edit");
const btnExitAlarm = document.querySelector(".btn-exit-form");
const inputTimeAlarm = document.querySelector(".time-alarm");
const inputMotivoAlarm = document.querySelector(".motivo-alarm");
const alarmMessage = document.querySelector(".alarm-message");
const btnDeleteAlarm = document.querySelector(".btn-delete-alarm");

const alarms = [];
let alarmEdit;

const verificarAlarm = setInterval(() => {
    const hora = new Date().toLocaleTimeString().substring(0,5);
    for (let i = 0; i < alarms.length; i++) {
        if(hora == alarms[i][0]){
            alarmMessage.style.display = "flex";
            alarmMessage.firstElementChild.textContent = `${alarms[i][1]}`;
        }else alarmMessage.style.display = "none";
    }
}, 1000);
const exitAlarm=(e)=>{
    if(e.key == "Escape"){
        formAlarm.style.display = "none";   
        console.log("exit");
        removeEventListener("keydown",exitAlarm);
    }
}
const validarForm=()=>{
    return inputTimeAlarm.value.trim()!= "" && inputMotivoAlarm.value.trim() != "";
}
const mostrarAlarms=()=>{
    alarms.sort();
    listAlarms.innerHTML = "";
    for (let i = 0; i < alarms.length; i++) {
        const div = document.createElement("div");
        div.classList.add(`${i}`,"alarms-items");
        div.addEventListener("click",()=>{
            formAlarm.style.display = "flex";  
            textAddEdit.textContent = "Editar alarma";
            alarmEdit = i;
            btnDeleteAlarm.addEventListener("click",deleteAlarm);
            inputTimeAlarm.value = div.firstElementChild.textContent;
            inputMotivoAlarm.value = div.lastElementChild.textContent;
            addEventListener("keydown",exitAlarm);
        });
        div.innerHTML = `
            <div class="text-time-alarm items-alarm">${alarms[i][0]}</div>
            <div class="items-alarm">${alarms[i][1]}</div>
        `;
        listAlarms.appendChild(div);   
    }
}
const editarData=()=>{
    alarms[parseInt(alarmEdit)][0] = inputTimeAlarm.value;
    alarms[parseInt(alarmEdit)][1] = inputMotivoAlarm.value;
    mostrarAlarms();
}
const guardarData=()=>{
    let time = [inputTimeAlarm.value,inputMotivoAlarm.value];
    alarms.push(time);
    mostrarAlarms();
}
const deleteAlarm=()=>{
    alarms.splice(parseInt(alarmEdit),1);
    mostrarAlarms();
    formAlarm.style.display = "none"; 
}

btnAddAlarma.addEventListener("click",()=>{
    formAlarm.style.display = "flex";
    textAddEdit.textContent = "Agregar alarma";
    inputTimeAlarm.value = new Date().toLocaleTimeString().substring(0,5);
    addEventListener("keydown",exitAlarm);
});

document.querySelector(".btn-add-edit-alarm").addEventListener("click",(e)=>{
    e.preventDefault();
    if (validarForm()){
        if(textAddEdit.textContent == "Agregar alarma"){
            guardarData();
            inputTimeAlarm.value = "";
            inputMotivoAlarm.value = "Alarma";
            formAlarm.style.display = "none";   
        }else if(textAddEdit.textContent == "Editar alarma"){
            editarData();
            inputMotivoAlarm.value = "Alarma";
            formAlarm.style.display = "none";  
        }
    }
});
btnExitAlarm.addEventListener("click",()=>{
    formAlarm.style.display = "none";   
});

const { ipcRenderer} = require('electron')
const ipc = ipcRenderer

const reduceBtn = document.getElementById("reduceBtn");
const sizeBtn = document.getElementById("sizeBtn");
const closeBtn = document.getElementById("closeBtn");

reduceBtn.addEventListener("click", () => {
    ipc.send("reduceApp")
});

sizeBtn.addEventListener("click", () => {
    ipc.send("sizeApp")
});

closeBtn.addEventListener("click", () => {
    ipc.send("closeApp")
});

//Gestion ajout dans le registre de compte + preparation de la base de donnée
const btnAddLigne = document.getElementById("btnSaveLigne");
if(btnAddLigne != null)
{
    btnAddLigne.addEventListener('click', () => {
        // les inputs du formulaire ajout d'une ligne
        const dateVal = document.getElementById("dateLigne");
        const montantVal = document.getElementById("montantLigne");
        const infoVal = document.getElementById("infoLigne");

        //preparer l'objet pour l'insert en BBD

        var _myrec = {
            date: dateVal.value,
            montant: montantVal.value,
            info: infoVal.value,
        };
        console.log('****debug :', _myrec);
    })
}
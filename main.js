const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const ipc= ipcMain

//creation de fenetre
function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 730,
        minWidth: 1024,
        minHeight:640,
        closable: true,
        darkTheme: true,
        frame:false,
        icon: path.join(__dirname,'./icones/batiment-de-lhopital.ico'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation:false,
            devTools:true,
            preload: path.join(__dirname, "preload.js")

        }
    })
  
    win.loadFile("login.html");
    win.webContents.openDevTools() //option de DevTools pour verifier les fonctionnalités JAVASCRIPT

    //Gestion des demandes ipc 
    //les controles des bouttons de gestion de la fenetre close/reduce/maxim
    //top menu 
    ipc.on("reduceApp", () =>{
    win.minimize();
    });

    ipc.on("sizeApp", () =>{
      if(win.isMaximized()){
        win.restore();
      }
      else
      {
        win.maximize();
      }
      
    });

    ipc.on("closeApp", () =>{
    win.close();
    });


}

//quand electron est pret!
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    }) 
})

//gestion de la fermeture de tout les windows
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
      app.quit()
    }
})


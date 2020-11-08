const { app, BrowserWindow, Notification } = require('electron')

function createWindow() {
    const win = new BrowserWindow({

        frame: true,
        height: 720,
        width: 1080,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html');
    // win.setMenu(null)
    // win.webContents.openDevTools();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
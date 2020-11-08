const { remote } = require('electron');

document.getElementById('close').addEventListener('click', closeWindow)
document.getElementById('minimize').addEventListener('click', minimizeWindow)
document.getElementById('maximize').addEventListener('click', maximizeWindow)
var win = remote.getCurrentWindow()

function closeWindow() {
    win.close();
}

function minimizeWindow() {
    win.minimize();
}

function maximizeWindow() {
    win.isMaximized() ? win.unmaximize() : win.maximize();
}
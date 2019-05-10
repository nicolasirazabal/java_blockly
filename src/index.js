const { app, BrowserWindow } = require('electron');
// , Menu, ipcMain
const url = require('url');
const path = require('path');


let mainWindow;
let newProductWindow;

// Reload in Development for Browser Windows
if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    });
}


app.on('ready', () => {

    // The Main Window
    mainWindow = new BrowserWindow({});

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }));

    // Menu.buildFromTemplate();
});
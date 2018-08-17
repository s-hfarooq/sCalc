const electron = require('electron');
const app = electron.app;
const path = require('path');
const url = require('url');
const BrowserWindow = electron.BrowserWindow;
var mainWindow;


//Creates main window with layout of mail.html when application launched

app.on('ready', function()
{
  mainWindow = new BrowserWindow({width: 800, height: 1000});
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'main.html'),
    protocol: 'file:',
    slashes: true
  }));
});

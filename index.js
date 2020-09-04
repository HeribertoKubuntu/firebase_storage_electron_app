const Listr = require('listr');
const express = require('express');
const dev = express();
var path = require('path')
const electron = require('electron')
const { app, BrowserWindow } = require('electron')

const tasks = new Listr([
	{
		title: 'Registry folder "public" for read files',
		task:() => {
		dev.use(express.static(__dirname + '/public/'));
		}
	},
	{
		title: 'Start Express Server to listen on port 3000',
		task: () => {
		dev.listen('3000', function() {});
		}
	},
	{	//start task Load Electron
		title: 'Start Electron',
		task: () => {
		function createWindow () {
  		mainWindow = new BrowserWindow({
    	title: "Heriberto Delgado",
    	titleBarStyle: "hidden",
    	autoHideMenuBar: true,
    	width: 800,
    	height: 600,
    	icon: path.join(__dirname, 'public/app-icon/512.png'),
    	webPreferences: {
      	nodeIntegration: false,
        devTools: false
    }
  });
		function load (){
		     //mainWindow.loadURL(`file://${__dirname}/public/index.html`)
		     mainWindow.loadURL(`http://localhost:3000`)
         	 mainWindow.on('closed', () => {
         	 win = null;
    		 })
		}
		load();
  }
    app.on('ready', () => {
  	createWindow();
	});
	
	app.on('window-all-closed', function () {
  	if (process.platform !== 'darwin') {
    app.quit();
  	}
	});
	
	app.on('activate', function () {
	if (mainWindow === null) {
    createWindow();
  	}
	});

		app.allowRendererProcessReuse = true;
		} //end of task Load Electron
	}
]);

tasks.run().catch(err => {
	console.error(err);
});

/* Custom Menu */
const { Menu } = require('electron')
var i18n = new(require('./translations/i18n'))
const template = [{
        label: i18n.__('File'),
        submenu: [
            {
                label: 'Quit',
                accelerator: 'CmdOrCtrl+Q',
                click() { app.quit(); }
            },
            {
                label: 'Restart App',
                accelerator: 'CommandOrControl+Alt+R',
                click: function () {
                    app.relaunch();
                    app.exit();
                }
            },
            {
                type: 'separator'
            },
            {
                role: 'copy',
                label: i18n.__('Copy')
            },
            {
                role: 'selectall',
                label: i18n.__('Select all')
            }
        ]
    },
    {
        label: i18n.__('View'),
        submenu: [{
                role: 'resetzoom',
                accelerator: 'CmdOrCtrl+z',
                label: i18n.__('Reset Zoom')
            },
            {
                role: 'zoomin',
                accelerator: 'CmdOrCtrl+i',
                label: i18n.__('Zoom in')
            },
            {
                role: 'zoomout',
                accelerator: 'CmdOrCtrl+o',
                label: i18n.__('Zoom out')
            },
            {
                type: 'separator'
            },
            {
                role: 'togglefullscreen',
                label: i18n.__('Toggle fullscreen')
            }
        ]
    },
    {
        role: 'window',
        label: i18n.__('Window'),
        submenu: [{
                role: 'minimize',
                label: i18n.__('Minimize')
            },
            {
                role: 'close',
                label: i18n.__('Close')
            }
        ]
    },
    {
        role: 'about',
        label: i18n.__('About'),
        submenu: [{
            label: i18n.__('Developer'),
            click() { require('electron').shell.openExternal('https://github.com/HeribertoKubuntu') }
            }
            ]
    }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

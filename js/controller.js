const win = require('electron').remote.getCurrentWindow();

$(document).ready(function() {

    win.on('maximize', function() {
        $('#app-maximize').text(String.fromCodePoint('10064'));
    })

    win.on('unmaximize', function() {
        $('#app-maximize').text(String.fromCodePoint('9744'));
    })

    $('#app-title').text(document.title);

    $('#app-minimize').on('click', function() {
        win.minimize();
    })

    $('#app-maximize').on('click', function() {
        if (win.isMaximized()) {
            win.unmaximize();
        }
        else {
            win.maximize();
        }
    });

    $('#app-close').on('click', function() {
        win.close();
    })
})
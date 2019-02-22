const win = require('electron').remote.getCurrentWindow();

$(document).ready(function() {

    win.on('maximize', function() {
        $('#app-maximize').text(String.fromCodePoint('0x032')); // square icon.
    })

    win.on('unmaximize', function() {
        $('#app-maximize').text(String.fromCodePoint('0x031')); // double square icon.
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
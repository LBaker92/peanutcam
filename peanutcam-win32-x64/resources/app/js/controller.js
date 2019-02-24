const win = require('electron').remote.getCurrentWindow();

$(document).ready(function () {

    win.on('maximize', function () {
        $('#app-maximize').remove();
        $('#app-minimize').after(
            '<i id="app-maximize" style="font-size: 10px;" class="far fa-clone fa-flip-both titlebar-btn"></i>'
        );
    });

    win.on('unmaximize', function () {
        $('#app-maximize').remove();
        $('#app-minimize').after('<div id="app-maximize" class="titlebar-btn">&#9744;</div>');
    });

    $('#app-title').text(document.title);

    $(document).on('click', '#app-refresh', function () {
        location.reload(true);
    });

    $(document).on('click', '#app-minimize', function () {
        console.log('minimize pressed');
        win.minimize();
    });

    $(document).on('click', '#app-maximize', function () {
        console.log('maximize pressed');
        if (win.isMaximized()) {
            win.unmaximize();
        } else {
            win.maximize();
        }
    });

    $('#app-close').on('click', function () {
        win.close();
    });

});
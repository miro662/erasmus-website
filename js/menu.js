$(document).ready(function() {
    var menu_toggle = $("#mobile-menu");
    var menu = $("#navbar nav");

    $("#mobile-menu").click(function() {
        $("#navbar nav").toggle();
    });

    function reset() {
        if (menu_toggle.is(":visible"))
        {
            menu.hide();
        }
        else
        {
            menu.show();
        }
    }

    reset();

    $(window).resize(function() {
        reset();
    })
});
clicker_visible = "";
buildings_visible = "";
root = document.querySelector(':root');

function toggle_clicker() {
    if (clicker_visible != "hidden") {
        clicker_visible = "hidden";
        root.style.setProperty('--clicker-status', 'hidden');
    }
    else if (clicker_visible != "visible") {
        clicker_visible = "visible";
        root.style.setProperty('--clicker-status', 'visible');
    }
}

function toggle_buildings() {
    if (buildings_visible != "hidden") {
        buildings_visible = "hidden";
        root.style.setProperty('--buildings-status', 'hidden');
    }
    else if (buildings_visible != "visible") {
        buildings_visible = "visible";
        root.style.setProperty('--buildings-status', 'visible');
    }
}
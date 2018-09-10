
var theme = "dark";

function toggleMenu() {
    var icon = document.getElementById("navHamb");
    var menuTop = document.getElementById("navLeft");
    var x = document.getElementById("menu");
    if (x.className === "navMenu") {
        icon.innerHTML = "close";
        menuTop.className += " open";
        x.className += " open";
    } else {
        icon.innerHTML = "menu";
        menuTop.className = "navLeft";
        x.className = "navMenu";
    }
}

function toggleTheme() {
    if (theme == "dark") {
        theme = "truedark";
    } else if (theme == "truedark") {
        theme = "dark";
    }
    document.getElementById("body").className = theme;
}
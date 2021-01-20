var menuMostrado = false

function BarraMenu() {
    menuMostrado = !menuMostrado
    var Barbutton = document.getElementById("menu");
    if (menuMostrado) {
        Barbutton.style.width = "300px";
    } else {
        Barbutton.style.width = "0";
    }
}
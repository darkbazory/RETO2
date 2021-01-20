var menuMostrado = false

function sonia() {
    menuMostrado = !menuMostrado
    var soniaBoton = document.getElementById("menu");
    if (menuMostrado) {
        soniaBoton.style.width = "300px";
    } else {
        soniaBoton.style.width = "0";
    }
}

function BarraMenu() {
    var Barbutton = document.getElementById("menu");
    Barbutton.style.width = "300px"
    if (Barbutton.style.display === "block") {
        Barbutton.style.display = "none";
    } else {
        Barbutton.style.display = "block";
    }
  }
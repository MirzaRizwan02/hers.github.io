var modal = document.getElementById('modal');
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

// Nasłuchiwanie kliknięcia przycisku
btn.addEventListener("click",function() {
    modal.style.display = "block";
}); 

// Kiedy urzytkownik kliknie (x) modal dostaje display: none
span.addEventListener("click", function() {
    modal.style.display = "none";
});

// Klikając gdziekolwiek poza modal lub wciskając modal następuje ta sama akcja
window.addEventListener("click",function(event) {
    if (event.target == modal) { modal.style.display = "none";}
    }
);
window.addEventListener("keydown", function (e) {
    if (e.keyCode == 27  && modal.style.display == "block") {
        modal.style.display = "none";
    }
});
// Mostrar información adicional cuando el usuario haga clic en el botón
document.getElementById("infoButton").addEventListener("click", function() {
    var extraInfo = document.getElementById("extraInfo");
    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
    } else {
        extraInfo.style.display = "none";
    }
});

// Enviar el formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que la página se recargue al enviar el formulario
    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
});

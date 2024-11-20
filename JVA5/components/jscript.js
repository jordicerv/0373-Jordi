// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todas las miniaturas
    const thumbnails = document.querySelectorAll(".thumbnails img");
    const mainImage = document.getElementById("mainImage");

    // Añadir evento click a cada miniatura
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            const newImageSrc = thumbnail.getAttribute("data-image");
            mainImage.src = newImageSrc;
        });
    });
});

//hidden text

function showHighlight(section) {
    // Afegim la classe 'highlight' per canviar colors i mostrar el text
    section.classList.add("highlight");
}

function hideHighlight(section) {
    // Eliminem la classe 'highlight' per restaurar l'estat inicial
    section.classList.remove("highlight");
} 

//contador
let seconds = 0;

function updateClock() {
    seconds++;
    document.getElementById("tiempo").textContent = seconds;
}

//inicia el reloj
setInterval(updateClock, 1000);

//formulario

function validateForm() {
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    // Validació de contrasenya
    if (password1.length < 8) {
        alert("La contrasenya ha de tenir almenys 8 caràcters.");
        return;
    }

    // Comprovació que les contrasenyes coincideixen
    if (password1 !== password2) {
        alert("Les contrasenyes no coincideixen. Si us plau, revisa-les.");
        return;
    }

    alert("S’ha canviat correctament la contrasenya.");
}


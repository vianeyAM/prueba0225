document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("demoForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const empresa = document.getElementById("empresa").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const servicio = document.getElementById("servicio").value;

        if (nombre === "" || empresa === "" || correo === "" || servicio === "") {
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        if (!validateEmail(correo)) {
            alert("Por favor, ingrese un correo válido.");
            return;
        }

        alert("Formulario enviado con éxito.");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

/* ENABLE TOOLTIPS */

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

$("#enviarCorreo").on("click", function () {
    $(this).text("Gracias por darme clic!");
});


$(function () {
    $("#enviarCorreo").on("click", function (event) {
        alert("El correo fue enviado correctamente...")
    })

    $("h2").on("dblclick", function () {
        $(this).css("color", "var(--danger)");
    })

    $("#recetasRelacionadas .titulo").on("click", function (event) {
        $("#recetasRelacionadas .card-text").toggle("slow");
    })
});
$(document).ready(function () {

    var talent = JSON.parse(localStorage.getItem("talento"));

    console.log("ITem en STORAGE = " + talent);
    if (talent == null) {
        swal(
            'Error',
            "Para acceder a esta página debe inciar sesión primero.",
            'error'
        ).then(function () {

            window.location = "login.html";
        });

    }

    // Configurar pagina
    //console.log("TALENTOoo == " + JSON.parse(talent));
    $("#bienvenida").append(" :: Bienvenido ! " + talent.nombre);
    $("#id").val(talent.id);
    $("#name").val(talent.name);
    $("#edad").val(talent.edad);
    $("#email").val(talent.email);
    $("#cap").val(talent.capacidades);
    $("#actividad").val(talent.actividad);
    $("#pass").val(talent.password);
    $("#edad").val(talent.edad);
    $("#lugar").val(talent.lugar);
    $("#tarifa").val(talent.tarifa);
    $("#horas").val(talent.horas);





return false;
});

$("#boton-salir").click(function () {
    localStorage.clear()
    window.location = "index.html";

});
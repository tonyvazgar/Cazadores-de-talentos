$(function () {


    $("#iniciarSesion").click(function() {
        var email = $("#email").val();
        var pass = $("#pass").val();
        var tipo = $("#tipoUsuario option:selected").val();
        console.log("Valor de tipo = " +tipo);
        var data = "email=" + email + "&password=" + pass + "&tipo=" + tipo;

        $.ajax({
            type: "GET",
            url: "ws1/login.php",
            data: data,
            dataType: "json",
            success: function(response) {
               //console.log("RESPONSE VAlUE " + type(response));

                console.log("RESPONSE == " + data);
                console.log(data);

                if (data =! null && response["status"] == "200") {
                    if (tipo == "0") {
                        var id = response['data']['idTalento'];
                        var nombre = response['data']['nombre'];
                        var edad = response['data']['edad'];
                        var email = response['data']['email'];
                        var capacidades = response['data']['capacidades'];
                        var actividad = response['data']['actividad'];
                        var horas = response['data']['horas'];
                        var lugar = response['data']['lugar'];
                        var tarifa = response['data']['tarifa'];
                        var password = pass;

                        var talent = new Talento(id, nombre, edad, email, capacidades, actividad, horas, lugar, tarifa, password);
                        localStorage.setItem("talento", JSON.stringify(talent));

                        //console.log("Before going storage is " + localStorage.getItem("talento"));
                        window.location = "talento.html"


                    } else if (tipo == "1") {
                        var id = response['data']['idCazador'];
                        var nombre = response['data']['nombre'];
                        var edad = response['data']['edad'];
                        var email = response['data']['email'];
                        var giro = response['data']['giro'];

                        var cazador = Cazador(id, nombre, edad, email, giro, pass);
                        localStorage.setItem("cazador", JSON.stringify(cazador));
                        window.location = "cazador.html";
                    }





                } else {

                    swal(
                        'Error',
                        response["msg"],
                        'error'
                    );
                }

            },
            error: function() {
                swal({
                    position: 'top-right',
                    type: 'error',
                    title: 'Error al iniciar sesion problemas tecnicos',
                    showConfirmButton: false,
                    timer: 1500
                });
            }






        });

    return false;

    }); // END CLICK INICIAR SESION

});

$(document).ready(function () {
    var t = localStorage.getItem("talento");
    var c = localStorage.getItem("cazador");
    if (t != null) {
        window.location = "talento.html";
    }
    if (c != null) {
        window.location = "cazador.html";
    }


    return false;
});
function Cazador (id, nombre, edad, email, giro, password) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.giro = giro;
    this.password = password;

    this.likeTalento = function(idTalento) {
        //Servicio web para agregar like de talento a cazador
        // Despues checar si es reciproco para agendar cita


    };
    this.agendarCita = function(idTalento) {
        //Llamar al servicio de citas e ir a pagina de cita

    };





}

function Talento (id, nombre, edad, email, capacidades, actividad, horas, lugar, tarifa, password) {

    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.capacidades = capacidades;
    this.actividad = actividad;
    this.horas = horas;
    this.lugar = lugar;
    this.tarifa = tarifa;
    this.password = password;

    this.likeCazador = function (idCazador) {
        //Servicio web para agregar like de cazador a talendo

    };

    this.agendarCita = function(idCazador) {
        //Llamar al servicio de citas e ir a pagina de cita

    };



}
<?php
require_once "main.php";

//Este servico Gestiona el inicio de sesión de un talento o un cazador

/* Parametros:
    - email             Email del usuario
    - password          Contraseña del usuario
    - tipo              Tipo (talento o cazador)


   Devuelve aun JSON con {status, msg, data}

   Lista de status:
   - 0      No execution
   - 200 	Login Correcto
   - 600	Error Login
   - 601    No se recibieron todos datos
   - 700    Error en servidor

*/
if(isset($_GET[debug])){
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
}

header('Content-Type: application/json');
$json = array(
    'status'	=> 0,
    'msg'		=> '',
    'data'      => array(
        'idUsuario'   => '',
    )
);

//Validación de los parametros

$email = "";
if (!isset($_GET[email]) || trim($_GET[email]) == "" || $_GET[email] == 'NULL') {

    $json['status'] = "601";
    $json['msg'] = "Campo de email vacio";
    echo(json_encode($json));
    exit;

} else {
    $email = $_GET[email];
}

$pass = "";
if (!isset($_GET[password]) || trim($_GET[password]) == "" || $_GET[password] == 'NULL') {

    $json['status'] = "601";
    $json['msg'] = "Campo de password vacio";
    echo(json_encode($json));
    exit;

} else {
    $pass = $_GET[password];
}

$tipo = "";
if (!isset($_GET[tipo]) || trim($_GET[tipo]) == "" || $_GET[tipo] == 'NULL' || $_GET[tipo] == '-1') {

    $json['status'] = "601";
    $json['msg'] = "Campo de tipo vacio";
    echo(json_encode($json));
    exit;

} else {
    $tipo = $_GET[tipo];
}

main::connect();
session_start();

if ($tipo == "0") {
    $sql = "SELECT * FROM Talento WHERE email = '$email' AND password = '$pass'";
    $result = main::$conn->query($sql);
    if (!$result) {
        $json['status'] = "700";
        $json['msg'] = "Error en servidor";
        echo(json_encode($json));
        exit;

    }
    $row = $result->fetch_assoc();
    $rowcount = mysqli_num_rows($result);

    if ($rowcount == 1) {
        $json['status'] = "200";
        $json['msg'] = "Bienvenido";
        $json['data'] = array(
            'idTalento'         => $row["idTalento"],
            'nombre'            => $row['nombre'],
            'edad'              => $row['edad'],
            'email'             => $row['email'],
            'capacidades'       => $row['capacidades'],
            'actividad'         => $row['actividad'],
            'horas'             => $row['horas'],
            'lugar'             => $row['lugar'],
            'tarifa'            => $row['tarifa']


        );
        echo(json_encode($json));
        exit;



    } else {
        $json['status'] = "600";
        $json['msg'] = "Usuario o contrasena incorrectos";
        echo(json_encode($json));
        exit;
    }








} else if ($tipo == "1") {
    $sql = "SELECT * FROM Cazador WHERE email = '$email' AND password = '$pass'";
    //echo $sql;

    $result = main::$conn->query($sql);
    if (!$result) {
        $json['status'] = "700";
        $json['msg'] = "Error en servidor";
        echo(json_encode($json));
        exit;

    }
    $row = $result->fetch_assoc();
    $rowcount = mysqli_num_rows($result);

    if ($rowcount == 1) {
        $json['status'] = "200";
        $json['msg'] = "Bienvenido";
        $json['data'] = array(
            'idCazador' => $row["idCazador"],
            'nombre'    => $row['nombre'],
            'edad'      => $row['edad'],
            'email'     => $row['email'],
            'giro'      => $row['giro']

        );
        echo(json_encode($json));
        exit;



    } else {
        $json['status'] = "600";
        $json['msg'] = "Usuario o contrasena incorrectos";
        echo(json_encode($json));
        exit;
    }

}








?>
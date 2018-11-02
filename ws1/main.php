<?php
error_reporting(E_ERROR | E_PARSE);
abstract class main {
    public static $conn;

    private static $server = "localhost";
    private static $user = "root";
    private static $pass = "Hh@-240897";
    private static $dbName = "Cazadores";


    static function connect() {
        if (main::$conn != null) {
            return;
        }
        main::$conn = new mysqli(main::$server, main::$user, main::$pass, main::$dbName);
        main::$conn->set_charset("utf8");
        if (main::$conn->connect_error) {

            die("Error de conexión con nuestra base de datos, contácte a soporte");

        }
    }


}



?>

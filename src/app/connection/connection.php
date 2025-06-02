<?php

$hostname='192.168.1.112';
$database='sipisa';
$username='root';
$password='58737217';

$conexion=new mysqli($hostname,$username,$password,$database);
if($conexion->connect_errno){
    echo "El sitio web está experimentado problemas";
}


function conectar()
{
    try {
        $mbd = new PDO("mysql:host=".$GLOBALS["hostname"].";dbname=".$GLOBALS["database"]."", $GLOBALS["username"], $GLOBALS["password"], array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
        return $mbd;
    } catch (PDOException $e) {
        print "¡Error!: " . $e->getMessage() . "<br/>";
        die();
    }    

}


?>
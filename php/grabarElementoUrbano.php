<?php

header('Access-Control-Allow-Origin: *'); //* permite la conexión desde cualquier dominio
header('Access-Control-Allow-Headers: Content-Type');

include('conexionBd.php');

$contenido = $_POST['Todo']; 

$cadena= str_replace("{", "", $contenido);

$cadena2= str_replace("}","", $cadena);

$contenido= str_replace("\\","", $contenido);
 
//Array en formato json
$array = json_decode($contenido, true);

$cadena="";

$tmpArray = array();


foreach ($array as $dato){
	$tmpArray[]=$dato;

}

	if ($connect->connect_errno) {
		echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;

	} else {											//El 0 es el id que es auto-increment									
		$query = "INSERT INTO IOT_MoralV VALUES (0,'$tmpArray[0]','$tmpArray[1]','$tmpArray[2]','$tmpArray[3]','$tmpArray[4]','$tmpArray[5]','$tmpArray[6]','$tmpArray[7]')";
		$resultado = mysqli_query($connect,$query); //ejecuta la instrucción insert
		echo "Registro grabado correctamente ".$query ;
		$connect->close();

	}

?>
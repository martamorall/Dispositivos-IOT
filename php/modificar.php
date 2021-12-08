<?php

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Headers: Content-Type');

include('conexionBd.php');

$contenido = $_POST['Envio']; 

$tmpArray=explode(",",$contenido);



	if ($connect->connect_errno) {
		echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;

	} else {											//El 0 es el id que es auto-increment									
		$query = "UPDATE IOT_MoralV SET tipo = '$tmpArray[1]', 
		cantidad = $tmpArray[2], 
		hora = '$tmpArray[3]', 
		fecha = '$tmpArray[4]', 
		latitud = '$tmpArray[5]',
		longitud = '$tmpArray[6]',
		direccion = '$tmpArray[7]',
		descripcion = '$tmpArray[8]'
		WHERE id = $tmpArray[0]";
		$resultado = mysqli_query($connect,$query); //ejecuta la instrucción update
		echo "Registro modificado correctamente ".$query ;
		$connect->close();

	}

?>
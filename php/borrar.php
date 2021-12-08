<?php

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Headers: Content-Type');

include('conexionBd.php');
$id=$_POST["Envio"];

$sql = "DELETE FROM IOT_MoralV WHERE id = $id";


$resultado = mysqli_query($connect, $sql);
    echo "Registro borrado ".$sql;
    $output = "Se ha borrado el registro";

print(json_encode($output));

$connect->close();

?>
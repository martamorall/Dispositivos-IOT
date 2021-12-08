<?php

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Headers: Content-Type');

include('conexionBd.php');

$orden=$_POST["Envio"];

$sql = "SELECT * FROM IOT_MoralV ORDER BY id ".$orden." LIMIT 1";

$resultado = mysqli_query($connect, $sql);

while ($row = mysqli_fetch_assoc($resultado)) {

    $output[] = $row;

}

print(json_encode($output));

$connect->close();

?>
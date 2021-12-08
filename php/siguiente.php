<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Headers: Content-Type');
  include('conexionBd.php');

  $contenido=$_POST["Envio"];
    $contenido= str_replace("\\","", $contenido);    
    $array=explode(",",$contenido);
 
 $condicion=$array[1];
 $id = $array[0];
 
 //Siguiente

$sql= "SELECT * FROM IOT_MoralV WHERE id $condicion $id LIMIT 1";

  
$resultado = mysqli_query($connect, $sql);
while($row=mysqli_fetch_assoc($resultado)){
$output[]=$row;
}
print(json_encode($output));


$connect->close();

?>

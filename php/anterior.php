<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Headers: Content-Type');
  include('conexionBd.php');

  $contenido=$_POST["Envio"];
    $contenido= str_replace("\\","", $contenido);    
    $array=explode(",",$contenido);
 
 $condicion="<";
 $id = $array[0];

 $sql= "SELECT * FROM IOT_MoralV WHERE id $condicion   $id  ORDER BY id DESC LIMIT 1";
//SELECT * FROM vecinos WHERE idVecino <  7 ORDER BY idVecino  DESC LIMIT 1// anterior

//$sql= "SELECT * FROM vecinos WHERE idVecino  >  1 Limit 1";
$resultado = mysqli_query($connect,$sql);
while($row=mysqli_fetch_assoc($resultado)){
$output[]=$row;
}
print(json_encode($output));
$connect->close();

?>
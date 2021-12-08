var bGrabar = document.getElementById("grabarRegistro");
var bPrimero = document.getElementById("bPrimero");
var bUltimo = document.getElementById("bUltimo");
var bAnterior = document.getElementById("bAnterior");
var bSiguiente = document.getElementById("bSiguiente");
var bBorrar = document.getElementById("bBorrar");
var bModificar = document.getElementById("bModificar");

bGrabar.addEventListener("click", grabar, false);
bPrimero.addEventListener("click", primero, false);
bUltimo.addEventListener("click", ultimo, false);
bAnterior.addEventListener("click", anterior, false);
bSiguiente.addEventListener("click", siguiente, false);
bModificar.addEventListener("click", modificar, false);
bBorrar.addEventListener("click", borrar, false);

function grabar() {
    grabarRegistro = true;
    nuevo = true;
    //'"' + "IdVecino" + '":' + '"' + IdVecino.value + '",'

    cfc = cFecha.value.split("-");
    cFechaCambiada = cfc[2] + "-" + cfc[1] + "-" + cfc[0];

    var datosElementoUrbano = '"' + "Tipo" + '":' + '"' + cTipo.value + '",'
        + '"' + "Cantidad" + '":' + '' + cCantidad.value + ','
        + '"' + "Hora" + '":' + '"' + cHora.value + '",'
        + '"' + "Fecha" + '":' + '"' + cFechaCambiada + '",'
        + '"' + "Latitud" + '":' + '"' + cLatitud.value + '",'
        + '"' + "Longitud" + '":' + '"' + cLongitud.value + '",'
        + '"' + "Direccion" + '":' + '"' + cDireccion.value + '",'
        + '"' + "Descripcion" + '":' + '"' + cDescripcion.value + '"';

    //alert(datosElementoUrbano)
    var ajaxrequest = new XMLHttpRequest();

    //Le paso el fichero JSON con llaves
    var jdatoselemento = "{" + datosElementoUrbano + "}";
    var envio = "Todo=" + jdatoselemento;

    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/MartaM/grabarElementoUrbano.php", true);

    //Le indica el tipo de codificación de caracteres que enviamos
    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //Establecer la conexión con el servidor
    ajaxrequest.onreadystatechange = function () {
        //alert(ajaxrequest.readyState + "--" + ajaxrequest.status); //ReadyState son valores (del 1 al 4) que indican si se estableció bien la conexión
        //Status es el código de estado (400, 500)
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            var datosLeidos = ajaxrequest.responseText; //responseText indica la información que recibe del servidor (cómo responde)
            console.log("Datos Recibidos  :" + datosLeidos);
            alert("Registro grabado correctamente");
            
        }
    };
    //ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //alert(envio)
    ajaxrequest.send(envio);
}

function primero() {
    var ajaxrequest = new XMLHttpRequest();
    var orden="ASC";
    var envio="Envio="+orden;
    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/MartaM/consultaElementosUrbanos.php", true);

    //Le indica el tipo de codificación de caracteres que enviamos
    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //Establecer la conexión con el servidor
    ajaxrequest.onreadystatechange = function () {
        //alert(ajaxrequest.readyState + "--" + ajaxrequest.status); //ReadyState son valores (del 1 al 4) que indican si se estableció bien la conexión
        //Status es el código de estado (400, 500)
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            var datosLeidos = ajaxrequest.responseText; //responseText indica la información que recibe del servidor (cómo responde)
            console.log("Datos Recibidos  :" + datosLeidos);
            var IOTleidos = JSON.parse(datosLeidos);
            if (IOTleidos != null) {
                mostrarDatos(IOTleidos);
            }else{
                alert("No hay registros");
            }
        }
    };
    //ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    ajaxrequest.send(envio);
}
function ultimo() {
    var ajaxrequest = new XMLHttpRequest();
    var orden="DESC";
    var envio="Envio="+orden;
    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/MartaM/ultimo.php", true);

    //Le indica el tipo de codificación de caracteres que enviamos
    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //Establecer la conexión con el servidor
    ajaxrequest.onreadystatechange = function () {
        //alert(ajaxrequest.readyState + "--" + ajaxrequest.status); //ReadyState son valores (del 1 al 4) que indican si se estableció bien la conexión
        //Status es el código de estado (400, 500)
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            var datosLeidos = ajaxrequest.responseText; //responseText indica la información que recibe del servidor (cómo responde)
            console.log("Datos Recibidos  :" + datosLeidos);
            var IOTleidos = JSON.parse(datosLeidos);
            if (IOTleidos != null) {
                mostrarDatos(IOTleidos);
            }else{
                alert("No hay registros");
            }
        }
    };
    //ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    ajaxrequest.send(envio);
}
function mostrarDatos(datosLeidos){
cId.value = datosLeidos[0].id;
cTipo.value = datosLeidos[0].tipo;
cCantidad.value = datosLeidos[0].cantidad;
cHora.value = datosLeidos[0].hora;
cfc = datosLeidos[0].fecha.split("-");
cFechaCambiada = cfc[2] + "-" + cfc[1] + "-" + cfc[0];
cFecha.value = cFechaCambiada;
cLatitud.value = datosLeidos[0].latitud;
cLongitud.value = datosLeidos[0].longitud;
cDireccion.value = datosLeidos[0].direccion;
cDescripcion.value = datosLeidos[0].descripcion;
    
}
function siguiente() {
    /*nuevo = false;
    grabarRegistro = true;*/
    if (cId.value == "") {
        cId.value = 0;
    }
    //alert(cId.value);
    var condicion=">";
    // Conicion id > o <
    var jdatoselemento = cId.value +","+condicion;
    let envio = "Envio="+jdatoselemento;
//alert(envio);
    var ajaxrequest = new XMLHttpRequest();

    //     alert("Siguiente  Anterior")
    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/MartaM/siguiente.php", true);

    ajaxrequest.onreadystatechange = function () {
        //alert(ajaxrequest.readyState + "--" + ajaxrequest.status);
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            var datosLeidos = ajaxrequest.response;
            //alert("Datos Recibidos :" + datosLeidos);
            var IOTleidos = JSON.parse(datosLeidos);
            if (IOTleidos != null) {
                mostrarDatos(IOTleidos);
            } else {
                alert("No Hay Registros que cumplan la condición")
            }
        }
    };

    //ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
    ajaxrequest.send(envio);
}
function anterior() {
    /*nuevo = false;
    grabarRegistro = true;*/
    if (cId.value == "") {
        cId.value = 0;
    }
    //alert(cId.value);
    condicion='<';
    // Conicion id > o <
    var jdatoselemento = cId.value+","+condicion;
    let envio = "Envio=" + jdatoselemento;

    var ajaxrequest = new XMLHttpRequest();

    //     alert("Siguiente  Anterior")
    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/MartaM/anterior.php", true);

    ajaxrequest.onreadystatechange = function () {
        //alert(ajaxrequest.readyState + "--" + ajaxrequest.status);
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            var datosLeidosJSON = ajaxrequest.response;
            //alert("Datos Recibidos :" + datosLeidosJSON);
            var IOTleidos = JSON.parse(datosLeidosJSON);
            if (IOTleidos != null) {
                mostrarDatos(IOTleidos);
            } else {
                alert("No Hay Registros que cumplan la condición")
            }
        }
    };

    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
    ajaxrequest.send(envio);
}
function borrar(){
    var ajaxrequest = new XMLHttpRequest();
    var id=cId.value;
    var envio="Envio="+id;
    //alert(envio);
    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/MartaM/borrar.php", true);

    //Le indica el tipo de codificación de caracteres que enviamos
    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //Establecer la conexión con el servidor
    ajaxrequest.onreadystatechange = function () {
        //alert(ajaxrequest.readyState + "--" + ajaxrequest.status); //ReadyState son valores (del 1 al 4) que indican si se estableció bien la conexión
        //Status es el código de estado (400, 500)
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            var datosLeidos = ajaxrequest.responseText; //responseText indica la información que recibe del servidor (cómo responde)
            console.log("Datos Recibidos  :" + datosLeidos);
            alert("Registro borrado correctamente");
            
        }
    };
    //ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    ajaxrequest.send(envio);
}
function modificar(){
    var ajaxrequest = new XMLHttpRequest();
    cfc = cFecha.value.split("-");
    cFechaCambiada = cfc[2] + "-" + cfc[1] + "-" + cfc[0];
    var datosIOT='"'+cId.value+'"'+","+'"'+cTipo.value+'"'+","+''+cCantidad.value+''+","+'"'+cHora.value+'"'+","+'"'+cFechaCambiada+'"'+","+'"'+cLatitud.value+'"'+","+'"'+cLongitud.value+'"'+","+'"'+cDireccion.value+'"'+","+'"'+cDescripcion.value+'"';
    var todo="Envio="+datosIOT;
    //alert(todo);
    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/MartaM/modificar.php", true);

    //Le indica el tipo de codificación de caracteres que enviamos
    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //Establecer la conexión con el servidor
    ajaxrequest.onreadystatechange = function () {
        //alert(ajaxrequest.readyState + "--" + ajaxrequest.status); //ReadyState son valores (del 1 al 4) que indican si se estableció bien la conexión
        //Status es el código de estado (400, 500)
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            var datosLeidos = ajaxrequest.responseText; //responseText indica la información que recibe del servidor (cómo responde)
            console.log("Datos Recibidos  :" + datosLeidos);
            alert("Registro modificado correctamente");
        }
    };
    //ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    ajaxrequest.send(todo);
}


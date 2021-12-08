var cajas=document.querySelectorAll("form input");
var cajaChequeo=null; //Caja con la que trabajo
var cajaNombre=null;

//Evento para ver en qué caja me he posicionado
cajas.forEach(caja =>{
    caja.addEventListener("keydown", () =>{
        elementoSeleccionado(caja);
    })
});

//Evalua la expresión regular cuando pierde el foco
cajas.forEach(caja =>{
    caja.addEventListener("keyup", () =>{
        evaluaPatron(caja);
    })
});

cajas.forEach(caja =>{
    caja.addEventListener("blur", () =>{
        evaluaPatron(caja);
    })
});
 
function elementoSeleccionado(caja){
    cajaChequeo=caja.id;
}

function evaluaPatron(){
    if(cajaChequeo=="cId"){
        var patron=/^[0-9]+$/
        var resultado=patron.test(cId.value);
        
        //Si el resultado es false
        if(!resultado){
            document.getElementById("cId").style.color="red";
            document.getElementById("cId").focus();//no le deja salir del input hasta que no lo escribe bien
        }else{
            document.getElementById("cId").style.color="black";
        }
    }
    if(cajaChequeo=="cTipo"){
        var patron=/^Temperatura$|^Luminosidad$|^Caudal$|^Viento$|^Contaminacion$|^Posicion GPS$/;
        var resultado=patron.test(cTipo.value);
        if(!resultado){
            document.getElementById("cTipo").style.color="red";
            document.getElementById("cTipo").focus();//no le deja salir del input hasta que no lo escribe bien
        }else{
            document.getElementById("cTipo").style.color="black";
        }
    }
    if(cajaChequeo=="cCantidad"){
        var patron=/^[0-9]+$/
        var resultado=patron.test(cCantidad.value);
        
        //Si el resultado es false
        if(!resultado){
            document.getElementById("cCantidad").style.color="red";
            document.getElementById("cCantidad").focus();//no le deja salir del input hasta que no lo escribe bien
        }else{
            document.getElementById("cCantidad").style.color="black";
        }
    }
    if(cajaChequeo=="cHora"){
        var patron=/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0][0]$/;
        var resultado=patron.test(cHora.value);
        if(!resultado){
            document.getElementById("cHora").style.color="red";
            document.getElementById("cHora").focus();//no le deja salir del input hasta que no lo escribe bien
        }else{
            document.getElementById("cHora").style.color="black";
        }
    }
    if(cajaChequeo=="cFecha"){
        var patron =/^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/
        var resultado =patron.test(cFecha.value);
        if(!resultado){
           document.getElementById("cFecha").style.color="red"
           document.getElementById("cFecha").focus()
        }  else{
            document.getElementById("cFecha").style.color="black"
        } 
    }
    if(cajaChequeo=="cLatitud"){
        var patron=/^[0-9.]*$/;
        var resultado=patron.test(cLatitud.value);
        if(!resultado){
            document.getElementById("cLatitud").style.color="red";
            document.getElementById("cLatitud").focus();//no le deja salir del input hasta que no lo escribe bien
        }else{
            document.getElementById("cLatitud").style.color="black";
        }
    }
    if(cajaChequeo=="cLongitud"){
        var patron=/^[-][0-9.]*$/;
        var resultado=patron.test(cLongitud.value);
        if(!resultado){
            document.getElementById("cLongitud").style.color="red";
            document.getElementById("cLongitud").focus();//no le deja salir del input hasta que no lo escribe bien
        }else{
            document.getElementById("cLongitud").style.color="black";
        }
    }
    if(cajaChequeo=="cDireccion"){
        var patron=/(?=^.{1,150}$)[a-zA-Z0-9áéíóú]+/;
        var resultado=patron.test(cDireccion.value);
        if(!resultado){
            document.getElementById("cDireccion").style.color="red";
            document.getElementById("cDireccion").focus();//no le deja salir del input hasta que no lo escribe bien
        }else{
            document.getElementById("cDireccion").style.color="black";
        }
    }
    if(cajaChequeo=="cDescripcion"){
        var patron=/(?=^.{1,150}$)[a-zA-Z0-9áéíóú]+/;
        var resultado=patron.test(cDescripcion.value);
        if(!resultado){
            document.getElementById("cDescripcion").style.color="red";
            document.getElementById("cDescripcion").focus();//no le deja salir del input hasta que no lo escribe bien
        }else{
            document.getElementById("cDescripcion").style.color="black";
        }
    }
        

}



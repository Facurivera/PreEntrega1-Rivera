let primero_A = prompt("¿Tenes experiencia en algun tipo de instrumento?");
let primero_B = primero_A;
//responder con si o con no
if(primero_B == "si"){
    let segundo_A = prompt("¿que tipo de instrumento sabes tocar?");
    let segundo_B = segundo_A;
    let tercero = prompt("entre los rangos: basico, intermedio y avanzado, ¿cuanta experiencia crees tener en "+ segundo_B + "?");
    saludo ();
}   
else{
    saludo ();
}

function saludo(){
    alert("muchas gracias por visitarnos")
}
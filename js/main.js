
function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase(); /*Convertir mayusculas a minisculas*/
    //i Afecta tanto mayusculas como minusculas 
    //g Afecta toda la linea u oracion
    //m Afecta a el parrafo y multiples lineas
    var textoCifrado = texto.replace(/e/img,"enter");
    var textoCifrado = textoCifrado.replace(/o/img,"ober");
    var textoCifrado = textoCifrado.replace(/i/img,"imes");
    var textoCifrado = textoCifrado.replace(/a/img,"ai");
    var textoCifrado = textoCifrado.replace(/u/img,"ufat");

    document.getElementById("imagen1").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("textarea1").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase(); /*Convertir mayusculas a minisculas*/
    //i Afecta tanto mayusculas como minusculas 
    //g Afecta toda la linea u oracion
    //m Afecta a el parrafo y multiples lineas
    var textoCifrado = texto.replace(/enter/img,"e");
    var textoCifrado = textoCifrado.replace(/ober/img,"o");
    var textoCifrado = textoCifrado.replace(/imes/img,"i");
    var textoCifrado = textoCifrado.replace(/ai/img,"a");
    var textoCifrado = textoCifrado.replace(/ufat/img,"u");

    document.getElementById("imagen1").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("textarea1").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#textarea1");
    contenido.select();
    document.execCommand("copy");
    alert("Texto Copiado");
}
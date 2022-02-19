/* When the input field receives input, convert the value from feet to meters */
/* Encontrar Tiempo de ejecucion 1. */


calcularTiempo1 = function () {
  var cpi = document.getElementById('inputCiclos1').value;
  var frecuencia = document.getElementById('inputFrecuencia1').value;
  var frecuenciaM = document.getElementById('escalafrecuencia1').value;
  frecuencia = parseInt(frecuencia) * parseInt(frecuenciaM)
  console.log(frecuencia)
  tiempo = (parseInt(cpi) / frecuencia)  
  document.getElementById('inputTiempo1').value = tiempo;
  document.getElementById('showTiempo1').innerHTML = tiempo;
  document.getElementById('showCiclos1').innerHTML = cpi;
  document.getElementById('showFrecuencia1').innerHTML = frecuenciaM;
}

calculateCiclos1 = function () {
  var tiempo = document.getElementById('inputTiempo1').value;
  var frecuencia = document.getElementById('inputFrecuencia1').value;
  var frecuenciaM = document.getElementById('escalafrecuencia1').value;
  frecuencia = parseInt(frecuencia) * parseInt(frecuenciaM)
  ciclos = (parseInt(tiempo) * frecuencia)
  convertir1();
  document.getElementById('inputCiclos1').value = ciclos;
  document.getElementById('showTiempo1').innerHTML = tiempo;
  document.getElementById('showCiclos1').innerHTML = ciclos;
}

convertir1 = function () {
  var escala = document.getElementById('idescalatiempo1').value;  
  var texto = "";
  if (escala == 1000000000){
    texto = "ns"
  } else if (escala == 1000000){
    texto = "µs"
  } else if (escala == 1000){
    texto = "ms"
  } else if (escala == 1){
    texto = "s"
  } else if (escala == 0.001){
    texto = "Ks"
  } 
  tiempo = document.getElementById('inputTiempo1').value; 
  document.getElementById("showTiempo1").innerHTML =  tiempo * escala + texto; 
  console.log(tiempo * escala );
  // document.getElementById("inputTiempo1").value = tiempo * escala
//   console.log(parseInt(document.getElementById("inputTiempo").value))
}

/* */

calcularTiempo2 = function () {
  var cpi = document.getElementById('inputCiclos2').value;
  var frecuencia = document.getElementById('inputFrecuencia2').value;
  var frecuenciaM = document.getElementById('escalafrecuencia2').value;
  frecuencia = parseInt(frecuencia) * parseInt(frecuenciaM)
  console.log(frecuencia)
  tiempo = (parseInt(cpi) / frecuencia)  
  document.getElementById('inputTiempo2').value = tiempo;
  document.getElementById('showTiempo2').innerHTML = tiempo;
  document.getElementById('showCiclos2').innerHTML = cpi;
  document.getElementById('showFrecuencia2').innerHTML = frecuenciaM;
}

calculateCiclos2 = function () {
  var tiempo = document.getElementById('inputTiempo2').value;
  var frecuencia = document.getElementById('inputFrecuencia2').value;
  var frecuenciaM = document.getElementById('escalafrecuencia2').value;
  frecuencia = parseInt(frecuencia) * parseInt(frecuenciaM)
  ciclos = (parseInt(tiempo) * frecuencia)
  convertir2();
  document.getElementById('inputCiclos2').value = ciclos;
  document.getElementById('showTiempo2').innerHTML = tiempo;
  document.getElementById('showCiclos2').innerHTML = ciclos;
}

convertir2 = function () {
  var escala = document.getElementById('idescalatiempo2').value;  
  var texto = "";
  if (escala == 1000000000){
    texto = "ns"
  } else if (escala == 1000000){
    texto = "µs"
  } else if (escala == 1000){
    texto = "ms"
  } else if (escala == 1){
    texto = "s"
  } else if (escala == 0.001){
    texto = "Ks"
  } 
  tiempo = document.getElementById('inputTiempo2').value; 
  document.getElementById("showTiempo2").innerHTML =  tiempo * escala + texto; 
  console.log(tiempo * escala );
  // document.getElementById("inputTiempo1").value = tiempo * escala
//   console.log(parseInt(document.getElementById("inputTiempo").value))
}


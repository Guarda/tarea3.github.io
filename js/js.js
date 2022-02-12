/* When the input field receives input, convert the value from feet to meters */

var tiempo = 0  
function lengthConverter(valNum) {
  document.getElementById("inputTiempo").innerHTML = valNum / 0.0022046;
}

calculate = function () {
  var cpi = document.getElementById('inputCiclos').value;
  var frecuencia = document.getElementById('inputFrecuencia').value;
  var frecuenciaM = document.getElementById('escalafrecuencia').value;
  frecuencia = parseInt(frecuencia) * parseInt(frecuenciaM)
  tiempo = (parseInt(cpi) / frecuencia)
  convertir();
  document.getElementById('inputTiempo').innerHTML = tiempo;

}

convertir = function () {
  var escala = document.getElementById('idescalatiempo').value;
  document.getElementById("inputTiempo").innerHTML =  tiempo * escala
}


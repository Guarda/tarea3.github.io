/* When the input field receives input, convert the value from feet to meters */

var tiempo = 0  

calculateCiclos = function () {
  var tiempo = document.getElementById('inputTiempo').value;
  var frecuencia = document.getElementById('inputFrecuencia').value;
  var frecuenciaM = document.getElementById('escalafrecuencia').value;
  frecuencia = parseInt(frecuencia) * parseInt(frecuenciaM)
  ciclos = (parseInt(tiempo) * frecuencia)
  convertir();
  document.getElementById('inputCiclos').innerHTML = ciclos;
}

convertir = function () {
  var escala = document.getElementById('idescalatiempo').value;
  document.getElementById("inputTiempo").innerHTML =  tiempo * escala
//   console.log(parseInt(document.getElementById("inputTiempo").value))
}


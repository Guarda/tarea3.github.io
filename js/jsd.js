/* When the input field receives input, convert the value from feet to meters */

var frecuencia = 0 

calculate = function () {
  var cpi = document.getElementById('inputCiclos').value;
  var tiempo = document.getElementById('inputTiempo').value;
  var tiempoM = document.getElementById('idescalatiempo').value;
  tiempo = parseInt(tiempo) * parseInt(tiempoM)
  frecuencia = (parseInt(cpi) / tiempo)
  console.log(frecuencia)
  convertir();
  document.getElementById('inputFrecuencia').innerHTML = frecuencia;

}

convertir = function () {
  var escala = document.getElementById('idescalafrecuencia').value;
  document.getElementById("inputFrecuencia").innerHTML =  frecuencia / escala
}


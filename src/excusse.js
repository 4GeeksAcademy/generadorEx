let quien =['El perro ', 'Mi abuela ', 'El vecino ', 'Mi bebé '];
let accion = ['se comió ', 'perdió ', 'lamió ', 'vomitó '];
let que = ['mi tarea ', 'la dentadura postiza ', 'el chorizo ', 'mi uniforme '];
let cuando = ['durante el desayuno', 'mientas me duchaba', 'mientras rezaba', 'por la mañana'];  

function generarExcusa() {
  const quienAleatorio = quien[Math.floor(Math.random() * quien.length)];
  const accionAleatoria = accion[Math.floor(Math.random() * accion.length)];
  const queAleatorio = que[Math.floor(Math.random() * que.length)];
  const cuandoAleatorio = cuando[Math.floor(Math.random() * cuando.length)];

  const excusaCompleta = quienAleatorio + accionAleatoria + queAleatorio + cuandoAleatorio + ".";

  document.getElementById("generadorRandom").innerHTML = excusaCompleta;
 
  return excusaCompleta;

}
  console.log(generarExcusa());
  console.log(quien);

  window.onload=generarExcusa;

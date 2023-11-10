/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de 
la función Math.random para obtener números aleatorios entre 1 y 6 para 
cada uno de los lanzamientos de los dados. Sumar el resultado de 
lanzar dos dados y anotar en un array el número de apariciones 
de dicha suma, repitiendo 50 veces esta operación.
*/
function comparar(a, b) {
  return a - b;
}
const tiradas = [];
const sumasDados = [];
const arregloRepetidos = [];
let contador = 1;
for (let z = 0; z < 50; z++) {
  tiradas.push(Math.round(Math.random() * 10 + 2));
}
tiradas.sort(comparar);
console.log(tiradas);
for (let i = 0; i < tiradas.length; i++) {
  if (tiradas[i + 1] === tiradas[i]) {
    contador++;
  } else {
    sumasDados.push(tiradas[i]);
    arregloRepetidos.push(contador);
    contador = 1;
  }
}
document.write(`<table><tbody>`);
document.write(`<tr>
  <td>Suma🎲🎲</td>
  <td>Apariciones</td>
  </tr>`);
for (let j = 0; j < sumasDados.length; j++) {
  document.write(`<tr>
      <td>${sumasDados[j]} </td>
      <td>${arregloRepetidos[j]}</td>
    </tr>`);
}
document.write(`</tbody>
  </table>`);

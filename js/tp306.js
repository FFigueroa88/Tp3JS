/*
6- Solicitar por pantalla al usuario ingresar el valor de 
los lados de un rectángulo, luego crear una función para 
calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
Ejemplo:

Input:
lado A = 24
lado B = 5

Output: 58

*/
function Perimetro(a, b) {
  return 2 * (a + b);
}
let ladoA;
let ladoB;
do {
  ladoA = parseFloat(prompt(`Ingrese el lado de un rectangulo:`));
  ladoB = parseFloat(prompt(`Ingrese el otro lado de un rectangulo:`));
  if (!isNaN(ladoA) && !isNaN(ladoB)) {
    document.write(
      `<p> El rectangulo de lado A: ${ladoA} y lado B: ${ladoB} tiene por perimetro: ${Perimetro(
        ladoA,
        ladoB
      )}</p>`
    );
  } else {
    alert(`NO INGRESO UN VALOR NUMERICO.INTENTE OTRA VEZ.`);
  }
} while (
  confirm(
    `ACEPTAR:Continuar cargando valores para calcular perimetro CANCELAR:Detener y mostrar`
  )
);

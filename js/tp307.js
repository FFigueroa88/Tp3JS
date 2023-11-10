/*
7- Escriba un script que muestre la tabla de multiplicar de 
un número ingresado por pantalla, la creación de la tabla debe 
ser realizada con una función y mostrar solo los resultados del 
1 al 10 del número elegido por el usuario.

*/
function TablaMulti(a) {
  document.write(`<table><tbody>`);
  document.write(`<tr>
  <td>tabla del ${a} </td>
  <td>Resultado</td>
  </tr>`);
  for (let j = 1; j <= 10; j++) {
    document.write(`<tr>
      <td>${a} x ${j}</td>
      <td>${a * j}</td>
    </tr>`);
  }
  document.write(`</tbody>
  </table></br>`);
}

let numero;
do {
  numero = prompt(
    `Ingrese un numero. se mostrará su tabla de multiplicar del 1 al 10`
  );

  if (!isNaN(numero)) {
    TablaMulti(numero);
  } else {
    alert(`NO INGRESO UN VALOR NUMERICO.INTENTE OTRA VEZ`);
  }
} while (
  confirm(
    `ACEPTAR:Continuar cargando numeros para mostrar su tabla de multiplicar CANCELAR:Detener y mostrar`
  )
);

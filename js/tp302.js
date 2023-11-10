/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades 
y almacenarlas en un arreglo, cuando el usuario selecciona cancelar 
se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]


*/

const ciudades = [];

do {
  ciudades.push(prompt(`Ingrese una ciudad`));
} while (
  confirm(
    `ACEPTAR: Para continuar cargando ciudades. CANCELAR: Para salir y mostrar por pantalla`
  )
);

if (ciudades[0] === null && ciudades[ciudades.length - 1] === null) {
  document.write(`<p>NO HAY CIUDADES EN EL ARREGLO PARA MOSTRAR.</p>`);
} else {
  document.write(
    `<p>El arreglo de ciudades tiene ${ciudades.length} elementos </p>`
  );
  document.write(`<ul>`);

  document.write(`<li>Elemento de la primera posición: ${ciudades[0]}</li>`);
  if (ciudades[2] !== undefined) {
    document.write(`<li>Elemento de la tercera posición: ${ciudades[2]}</li>`);
  } else {
    document.write(
      `<li>Elemento de la tercera posición: No hay un elemento en la tercer posición</li>`
    );
  }
  document.write(
    `<li>Elemento de la ultima posición: ${ciudades[ciudades.length - 1]}</li>`
  );
  ciudades.push("París");
  document.write(
    `<li>Elemento de la ultima posición: ${
      ciudades[ciudades.length - 1]
    } (Luego de agregar Paris en la ultima posición)</li>`
  );
  document.write(`</ul>`);
  document.write(`<p>Arreglo de Ciudades</p>`);
  document.write(`<ul>`);
  for (
    let indiceCiudades = 0;
    indiceCiudades < ciudades.length;
    indiceCiudades++
  ) {
    document.write(`<li>Elemento: ${ciudades[indiceCiudades]}</li>`);
  }

  document.write(`</ul>`);
}

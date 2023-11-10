/*
5- Definir una función que muestre información sobre una cadena de texto 
que se le pasa como argumento. A partir de la cadena que se le pasa, 
la función determina si esa cadena está formada sólo por mayúsculas, sólo 
por minúsculas o por una mezcla de ambas.
*/
function checkType(mensaje) {
  mensaje = String(mensaje).trim();
  const regxs = {
    lower: /^[a-z0-9 ]+$/,
    upper: /^[A-Z0-9 ]+$/,
    upperLower: /^[A-Za-z0-9 ]+$/,
  };

  if (regxs.lower.test(mensaje)) {
    return "0";
  }

  if (regxs.upper.test(mensaje)) {
    return "1";
  }

  if (regxs.upperLower.test(mensaje)) {
    return "2";
  }

  return -1;
}

let mensaje;
let resultado;

do {
  mensaje = prompt("Ingrese mensaje para informar como esta formado");
  if (isNaN(mensaje) && mensaje != "") {
    resultado = checkType(mensaje);

    switch (resultado) {
      case "0":
        document.write(`<p>${mensaje}-- frase formada por minúsculas.</p>`);
        break;
      case "1":
        document.write(`<p>${mensaje}--FRASE FORMADA POR MAYÚSCULAS.</p>`);
        break;
      case "2":
        document.write(
          `<p>${mensaje}--Frase formada por MAYÚSCULAS y minúsculas.</p>`
        );
        break;
      default:
        document.write(`<p>El mensaje no incluye letras</p>`);
    }
  } else {
    alert(`INGRESÓ SOLO NUMEROS O UNA FRASE VACIA.INTENTE OTRA VEZ.`);
  }
} while (
  confirm(
    `ACEPTAR:Continuar cargando frases para analizar su formato CANCELAR:Detener y mostrar`
  )
);

/*
4- Escribir el código de una función a la que se pasa como parámetro 
un número entero y devuelve como resultado una cadena de texto 
que indica si el número es par o impar. Mostrar por pantalla 
el resultado devuelto por la función.
*/
function esPar(a) {
    if(!(a % 2)){

      document.write(`<p> ${a} Es número par.</p>`);
    }
    else{
      document.write(`<p>${a} Es número impar.</p>`);
    }
  }
  let numero;
 do{  
    numero = parseInt(prompt(`Ingrese un numero para saber paridad:`));
    if(!(isNaN(numero))){
      esPar(numero);
    }
    else{
      alert(`NO INGRESO UN VALOR NUMERICO.INTENTE OTRA VEZ.`);
    }

  }while(confirm(`ACEPTAR:Continuar cargando numeros para saber paridad CANCELAR:Detener y mostrar`)); 
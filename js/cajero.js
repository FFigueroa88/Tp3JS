/*
script que simula el funcionamiento de un cajero automatico

*/
let saldo = 100000;
let opcion;
do {
  opcion = prompt(
    "seleccione una opcion:\n 1.- consulte saldo , 2.- ingrese dinero , 3.- extraiga dinero"
  );

  switch (opcion) {
    case "saldo":
    case "consultar saldo":
    case "1":
      document.write(`<p>Su saldo actual es $${saldo}</p>`);
      break;
    case "depositar":
    case "2":
      let deposito = parseFloat(prompt("Cuanto deseas depositar?"));

      if (!isNaN(deposito) && deposito > 0) {
        saldo = saldo + deposito;
        document.write(
          `<p>Se ingresó $${deposito}.Su saldo actual es $${saldo}</p>`
        );
      } else {
        document.write(`<p>Ingresó un valor incorrecto</p>`);
      }
      break;
    case "extraer":
    case "3":
      let extraccion = parseFloat(prompt("cuanto deseas extraer?"));

      if (!isNaN(extraccion) && extraccion > 0 && extraccion <= saldo) {
        saldo = saldo - extraccion;
        document.write(
          `<p>Se extrajo $${extraccion}.Su saldo actual es $${saldo}</p>`
        );
      } else {
        document.write(`<p>Ingresó un valor incorrecto</p>`);
      }
      break;
    default:
      alert(`selecciono una opcion errronea`);
  }
} while (confirm("¿Desea realizar otra operacion?"));
let seleccion;

alert(
  "¡Bienvenido a la tienda de Sauce boys!\n\n" +
    "Descuentos disponibles:\n" +
    " - Si llevas 2 productos, obtendrás un 10% de descuento.\n" +
    " - Si llevas 3 productos, obtendrás un 15% de descuento.\n" +
    " - Si llevas 4 o más productos, obtendrás un 25% de descuento."
);

while (true) {
  seleccion = prompt(
    "Ingrese el código del producto que deseas: \n 1 - Gorras \n 2 - Camisetas \n 3 - Buzos"
  );

  if (seleccion === "1" || seleccion === "2" || seleccion === "3") {
    break;
  } else {
    alert("Ingrese una opción válida.");
  }
}

let cantidad;
while (true) {
  cantidad = parseInt(
    prompt("Ingrese la cantidad de productos que desea") || 0
  );

  if (cantidad > 0) {
    break;
  } else {
    alert("Ingrese una cantidad válida.");
  }
}

let descuento;
if (cantidad === 1) {
  descuento = 0;
} else if (cantidad === 2) {
  descuento = 0.1;
} else if (cantidad === 3) {
  descuento = 0.15;
} else {
  descuento = 0.25;
}

const subtotal = valor(seleccion) * cantidad;
const totalConDescuento = subtotal * (1 - descuento);

alert(
  `Subtotal: $${subtotal.toFixed(1)}\nDescuento: ${
    descuento * 100
  }%\nTotal a pagar: $${totalConDescuento.toFixed(1)}`
);

function valor(seleccion) {
  switch (seleccion) {
    case "1":
      return 30;

    case "2":
      return 45;

    case "3":
      return 90;

    default:
      return 0;
  }
}
alert("¡Gracias por comprar Sauce boys!");

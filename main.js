// Clase Carrito
class Carrito {
    constructor() {
      this._productos = [];
      this._total = 0;
    }
  
    // Getter para obtener los productos del carrito
    getProductos() {
      return this._productos;
    }
  
    // Getter para obtener el total de la compra
    getTotal() {
      return this._total;
    }
  
    // Método para agregar un producto al carrito
    agregarProducto(producto) {
      this._productos.push(producto);
      this._total += producto.precio;
      alert(`Has agregado ${producto.nombre} al carrito.`);
    }
  
    // Método para vaciar el carrito
    vaciarCarrito() {
      this._productos = [];
      this._total = 0;
      alert("El carrito se ha vaciado correctamente.");
    }
  }
  
  // Clase Producto
  class Producto {
    constructor(nombre, precio) {
      this._nombre = nombre;
      this._precio = precio;
    }
  
    // Getter para obtener el nombre del producto
    getNombre() {
      return this._nombre;
    }
  
    // Getter para obtener el precio del producto
    getPrecio() {
      return this._precio;
    }
  }
  
  // Función para crear una cuenta
  function crearCuenta() {
    let respuesta = prompt("¿Deseas crear una cuenta? (sí / no)");
  
    if (respuesta.toLowerCase() === "no") {
      alert("No fue posible crear la cuenta.");
      return null;
    } else if (respuesta.toLowerCase() !== "sí" && respuesta.toLowerCase() !== "si") {
      alert("Respuesta inválida. Por favor, responde con 'sí' o 'no'.");
      return null;
    }
  
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let apellido = prompt("Por favor, ingresa tu apellido:");
    let email = prompt("Por favor, ingresa tu correo electrónico:");
    let telefono = prompt("Por favor, ingresa tu número de teléfono:");
  
    alert(`Respuestas:\n\nNombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nTeléfono: ${telefono}`);
  
    let contraseña = prompt("Por favor, ingresa una contraseña:");
    let confirmarContraseña = prompt("Por favor, vuelve a ingresar la contraseña:");
  
    if (contraseña !== confirmarContraseña) {
      alert("Las contraseñas no coinciden. No fue posible crear la cuenta.");
      return null;
    }
  
    alert("Contraseña validada correctamente. Cuenta creada exitosamente.");
    alert("¡Bienvenido(a) a la tienda!");
  
    return new Carrito();
  }
  
  // Función para mostrar el carrito en HTML
  function mostrarCarritoEnHTML(carrito) {
    const carritoHTML = document.getElementById("carrito");
    carritoHTML.innerHTML = ""; // Limpiar el contenido actual del carrito en HTML
  
    if (carrito.productos.length === 0) {
      carritoHTML.innerHTML = "<p>El carrito está vacío.</p>";
      return;
    }
  
    const listaProductosHTML = document.createElement("ul");
  
    for (const producto of carrito.productos) {
      const itemProductoHTML = document.createElement("li");
      itemProductoHTML.textContent = `${producto.nombre} - $${producto.precio}`;
      listaProductosHTML.appendChild(itemProductoHTML);
    }
  
    const totalHTML = document.createElement("p");
    totalHTML.textContent = `Total de la compra: $${carrito.total}`;
  
    carritoHTML.appendChild(listaProductosHTML);
    carritoHTML.appendChild(totalHTML);
  }
  
  // Función principal
  function iniciarTienda() {
    const carrito = crearCuenta();
  
    if (!carrito) {
      return;
    }
  
    const opcion = prompt(
      "Por favor, elige una opción:\n" +
      "1. Comprar carpas\n" +
      "2. Comprar semillas\n" +
      "3. Comprar parafernalia\n" +
      "4. Mostrar carrito\n" +
      "5. Salir"
    );
  
    switch (opcion) {
      case "1":
        // Opciones de carpas
        const opcionCarpa = prompt(
          "Elige una opción de carpa:\n" +
          "1. Carpa 100x80 $30.890\n" +
          "2. Carpa 120x100 $44.600\n" +
          "3. Carpa 150x120 $53.100"
        );
  
        switch (opcionCarpa) {
          case "1":
            carrito.agregarProducto(new Producto("Carpa 100x80", 30890));
            break;
          case "2":
            carrito.agregarProducto(new Producto("Carpa 120x100", 44600));
            break;
          case "3":
            carrito.agregarProducto(new Producto("Carpa 150x120", 53100));
            break;
          default:
            alert("Opción inválida. Por favor, elige una opción válida.");
        }
  
        break;
      case "2":
        // Opciones de semillas
        const opcionSemilla = prompt(
          "Elige una opción de semilla:\n" +
          "1. Semilla autofloreciente $2500\n" +
          "2. 2 Semillas autoflorecientes $4700\n" +
          "3. 3 Semillas autoflorecientes $6800"
        );
  
        switch (opcionSemilla) {
          case "1":
            carrito.agregarProducto(new Producto("Semilla autofloreciente", 2500));
            break;
          case "2":
            carrito.agregarProducto(new Producto("2 Semillas autoflorecientes", 4700));
            break;
          case "3":
            carrito.agregarProducto(new Producto("3 Semillas autoflorecientes", 6800));
            break;
          default:
            alert("Opción inválida. Por favor, elige una opción válida.");
        }
  
        break;
      case "3":
        // Opciones de parafernalia
        const opcionParafernalia = prompt(
          "Elige una opción de parafernalia:\n" +
          "1. 1 picador $4000\n" +
          "2. 1 paquete de liyos $500\n" +
          "3. 50 filtros de carton $300"
        );
  
        switch (opcionParafernalia) {
          case "1":
            carrito.agregarProducto(new Producto("1 picador", 4000));
            break;
          case "2":
            carrito.agregarProducto(new Producto("1 paquete de liyos", 500));
            break;
          case "3":
            carrito.agregarProducto(new Producto("50 filtros de carton", 300));
            break;
          default:
            alert("Opción inválida. Por favor, elige una opción válida.");
        }
  
        break;
      case "4":
        // Mostrar el carrito en HTML
        mostrarCarritoEnHTML(carrito);
        break;
      case "5":
        alert("Gracias por visitar la tienda. ¡Hasta luego!");
        break;
      default:
        alert("Opción inválida. Por favor, elige una opción válida.");
    }
  }
  // Iniciar la tienda
iniciarTienda();
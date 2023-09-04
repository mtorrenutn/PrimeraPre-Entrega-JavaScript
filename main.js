alert ("Bienvenidos a Distribuidora Buenos Aires");

var productos = ["Fernet Branca=$2500", "Gancia=$1500", "Vino=$1700", "Cerveza Andes=$400(c/lata)", "Vodka Skyy=2300", "Cynar=$1400", "Coca-Cola=$400"," Sprite=$400","Agua=$250"];

var listaProductos = "Lista de productos(Recuerda que para seleccionar tu producto debes escribir el nombre sin el precio tal cualfiguera en la lista):\n";

for (var i = 0; i < productos.length; i++) {
    listaProductos += "🍾 " + productos[i] + "\n";
}

alert(listaProductos);
//------------------------------------------------------------Hasta aca di la bienvenida y mostre una lista con arrays----------------

//ASIGNO LAS VARIABLES
const comprarProductos = () => {
  let producto = "";
  let cantidad = 0;
  let precio = 0;
  let subtotal = 0;
   let pago="";
  let continuarcompra = true;
//INICIO UN DO WHILE  Y UN IF PARA CONSULTAR QUE PRODUCTOS DESEA Y CUANTOS , COMO PARAMETROS DE SEGURDAD AL INGRESAR DATOS INCORRECTOS NO INGRESA AL IF
  do {
    
    producto= prompt("¿Que producto desea comprar ?").toUpperCase();
    cantidad = Number( prompt("¿Cuantas unidades desea comprar?"));

    if(cantidad !==0 && producto!=="" &&  !isNaN(cantidad)){
    switch(producto) {                                //switch con los casos correspondientes 

        case "FERNET BRANCA":
        precio=2500 
        break;

        case "CERVEZA ANDES":
            precio=400
            break;

            case "GANCIA":
                precio=1500
                break;

            case "VINO":
                precio= 1700
                break;

                case "VODKA SKYY":
                    precio= 2300
                    break;
                
                    case "CYNAR":
                        precio=1400
                        break;
                        

                        case "COCA-COLA":
                            precio=400
                            break;


                            case "SPRITE":
                                precio=400
                                break;

                            case "AGUA":
                                precio=250
                                break;

                                default:  
                                alert("No contamos con los productos que seleccionaste."); //si selecciona productos que no tenemos se anuncia esta alerta
                                precio= 0;
                                cantidad=0;
    }

    }
    else { //en caso de ingresar un dato no valido como 0 , string o vacio se mostrara este cartel
      alert("El producto tiene que ser escrito igual que en la lista y la cantidad tiene que ser un numero distinto de 0")
    }
    subtotal += precio*cantidad;
    continuarcompra =confirm ("¿Desea continuar comprando?");
}  while(continuarcompra);


return subtotal;

}


const formadepago = (subtotal) => {       

  //la funcion forma de pago esta planteada con un do while , con un switch dentro del do.


    do{
    pago=prompt("¿Desea pagar con mercado pago,debito o credit?(con CREDITO tenes un 10% de recargo y con mercado pago tenes un 5% de descuento").toUpperCase();
    
    
    switch(pago){
    case "CREDITO":
    
    return subtotal*1.10
    break;
    
    case "DEBITO":
     return subtotal ;
     break;
    
    
     case "MERCADO PAGO":
      return subtotal * 0.95;
    break;
    
    default:
      
    alert("Metodo de pago incorrecto, por favor seleccione mercado pago , credito o debito");
    subtotal==0;
    }
    }                      //en caso de ser default asigne a subtotal como =0 para que tenga que volver entrar al bucle 
    while(subtotal!==0);
    
    return subtotal;
    }


const mostrarDetalleDeCompra = (precioFinal , precio) => {  //mostramos el precio final de la compra dependiendo tambien del metodo de pago seleccionado
    if (precio !==0){
    alert('El precio total de su compra es: $'+precioFinal);}

    else  {
        alert("Gracias por su visita.");      //como segurad extra si precio llega a esta instancia como 0 o como isNaN se muestra esta alerta
       
    }
  }

const subtotal= comprarProductos();

const precioFinal = formadepago(subtotal);

mostrarDetalleDeCompra (precioFinal)
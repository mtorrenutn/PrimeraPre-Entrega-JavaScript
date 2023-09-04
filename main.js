alert ("Bienvenidos a Distribuidora Buenos Aires");

var productos = ["Fernet Branca=$2500", "Gancia=$1500", "Vino Latitud 33=$1700", "Cerveza Andes=$400(c/lata)", "Vodka Skyy=2300", "Cynar=$1400", "Coca-Cola=$400"," Sprite=$400","Agua=$250"];

var listaProductos = "Lista de productos(Recuerda que para seleccionar tu producto debes escribir el nombre sin el precio tal cualfiguera en la lista):\n";

for (var i = 0; i < productos.length; i++) {
    listaProductos += "🍾 " + productos[i] + "\n";
}


alert(listaProductos);


const comprarProductos = () => {
  let producto = "";
  let cantidad = 0;
  let precio = 0;
  let subtotal = 0;
   let pago="";
  let continuarcompra = true;

  do {
    producto= prompt("¿Que producto desea comprar ?").toUpperCase();
    cantidad = Number( prompt("¿Cuantas unidades desea comprar?"));

    switch(producto) {

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
                                alert("No contamos con los productos que seleccionaste.");
                                precio= 0;
                                cantidad=0;
    }

  
    subtotal += precio*cantidad;
    continuarcompra =confirm ("¿Desea coontinuar comprando?");
}  while(continuarcompra);


return subtotal;

}


const formadepago = (subtotal) => {
if (subtotal !== 0){


        
pago=prompt("¿Desea pagar con mercado pago, debito o credito?(Con credito tenes 10% de recargo)") .toUpperCase();

if (pago=="CREDITO"){
return subtotal * 1.10;
}

else{
    return subtotal;
}
 }
 else{

    return 0;
 }






}


const mostrarDetalleDeCompra = (precioFinal , precio) => {
    if (precio !==0){
    alert('El precio total de su compra es: $'+precioFinal);}

    else  {
        alert("Gracias por su visita.");
       
    }
  }

const subtotal= comprarProductos();

const precioFinal = formadepago(subtotal);

mostrarDetalleDeCompra (precioFinal)
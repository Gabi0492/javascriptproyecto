//Array//

const productos = [
    {nombre:"Shoes", precio: 1000},
    {nombre:"Tshirt", precio: 1000},
    {nombre:"Pants", precio: 1000},



];
//Inicio de las variables //

let carrito = []
let seleccion = prompt ("Hi do you want to buys something? Please select yes or no")

while(seleccion != "yes" && seleccion != "no"){
    alert ("Please select yes or no")
    seleccion = prompt ("Do you want to buy something yes or no")
}

if (seleccion == "yes"){
    alert ("Attache the list of the products")
    let todosLosProductos = productos.map(
        (producto) => producto.nombre + "" + producto.precio + "$"
    );
    alert (todosLosProductos.join(" - "))
}else if (seleccion == "no"){
    alert ("Thanks for coming")
}

// Inicio del segundo bucle//

while (seleccion == "yes"){
let producto = prompt ("Do you want to add something to the cart")
let precio = 0

if (producto == "Shoes" || producto == "Tshirt" || producto == "Pants"){
    switch (producto){
        case "Shoes":
        precio = 1000;
        break;
        case "Tshirt":
        precio = 1000;
        break;
        case "Pants":
        precio = 1000;
        break;
    
    }
    let unidades = parseInt (prompt("How many pieces do you want to add"))
    carrito.push ({producto, unidades, precio})
    console.log (carrito)
    }else{
        alert ("We dont have that product")

}
seleccion = prompt ("Do you want to continue buying")

//Ultimo bucle//
while (seleccion === "no"){
    alert ("Thanks for your time")
    carrito.forEach((carritoFinal) =>{
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, final amount ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
}
}

const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log (`Total of your buys is: ${total}`)

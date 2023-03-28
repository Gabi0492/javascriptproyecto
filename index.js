
//** Array */
const productos = [

    //**Dress */
 {
    id:"dress-01",
    titulo:"Dress",
    imagen:"../javascriptproject/images/dress/dress2.jpeg",
    categoria:{
        nombre: "Dress",
        id: "dress",
    },
    precio: 1000
 },
 {
    id:"dress-02",
    titulo:"Dress",
    imagen:"../javascriptproject/images/dress/dress4.jpg",
    categoria:{
        nombre: "Dress",
        id: "dress",
    },
    precio: 1000
 },

 //**Tshirt */
 
 {
    id:"tshirt-01",
    titulo:"Tshirt",
    imagen:"../javascriptproject/images/t-shirt/tshirt1.jpg" ,
    categoria:{
        nombre: "Tshirt",
        id: "tshirt",
    },
    precio: 1000
 },  

 {
    id:"tshirt-02",
    titulo:"Tshirt",
    imagen:"../javascriptproject/images/t-shirt/tshirt4.jpeg" ,
    categoria:{
        nombre: "Tshirt",
        id: "tshirt",
    },
    precio: 1000
 },  

 //**Pants */

 {
    id:"pants-01",
    titulo:"Pants",
    imagen:"../javascriptproject/images/pants/pants3.jpg" ,
    categoria:{
        nombre: "Pants",
        id: "pants",
    },
    precio: 1000
 },

 {
    id:"pants-02",
    titulo:"Pants",
    imagen:"../javascriptproject/images/pants/pants4.jpg" ,
    categoria:{
        nombre: "Pants",
        id: "pants",
    },
    precio: 1000
 },
]


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");



function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML= `
        <img class="producto-imagen" src="${producto.imagen}" alt="dress1">
        <div class="producto-detalles">
            <h3 class="producto-titulo">"${producto.titulo}"</h3>
            <p class="producto-precio">"${producto.precio}"</p>
            <button class="producto-agregar" id ="${producto.id}">Select</button>
        </div>
        `;
        contenedorProductos.append(div);
        
    });
}

cargarProductos(productos);

botonesCategorias.forEach (boton => {
    boton.addEventListener("click", (e) =>{
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if(e.currentTarget.id != "todos"){
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else{
            cargarProductos(productos);
        }
    })
    localStorage.setItem("botones-categorias", JSON.stringify(botonesCategorias))
})

console.log (productos)
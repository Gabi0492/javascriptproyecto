
function convertir (){
let resultado 
const dolar = 4911;
const euro = 5246;
const operacion = prompt ("What type of change do you want?")
 if(operacion ==="dolars"){
  const dolart = parseInt(prompt ("Enter the amount"))
 resultado = dolart / dolar
 alert ("The change from Colombian pesos to dollars is: $" + resultado)
 }
else if (operacion === "euros"){
    const eurot = parseInt(prompt ("Enter the amount"))
    resultado = eurot / euro
    alert ("The change from Colombian pesos to euro is: €" + resultado)
    }
    else {
       alert ("You need to complete all the requirements")
}

}

console.log (resultado)
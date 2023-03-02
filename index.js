function convertir (){
    const valore = parseInt(document.getElementById("valor").innerHTML);
    let resultado = 0;
    const dolar = 4.911;
    const euro = 5.246;
    if (document.getElementById("one").checked){
        resultado = valore / dolar;
        alert ("The change from Colombian pesos to dollars is: $" + resultado);
    }
    else if (document.getElementById("two").checked){
        resultado = valore / euro;
        alert ("The change from Colombian pesos to euro is: €" + resultado);
    }
    else {
        alert ("You need to complete all the requirements")
    }
}
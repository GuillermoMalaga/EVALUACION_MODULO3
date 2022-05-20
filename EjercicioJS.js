//arreglo de coleres
var colors = document.querySelectorAll(".square");
var colorUnico= document.querySelector(".colorDisplay");
var colorFondo="RGB(35, 35, 35)";

console.log("esto en un aproba");
console.log(colors);
//funcion para generar colores aleatorios
function generarColor(num){
    return Math.floor(Math.random() * (num));
}

for (let i = 0; i < 6; i++) {
    let colorCuadro="RGB("+generarColor(255)+", "+generarColor(255)+", "+generarColor(255)+")";
    colors[i].style.backgroundColor=colorCuadro;
    console.log(colors[i].style.backgroundColor);  
    colors[i].addEventListener("click",function(){
        if(colorEscogido==this.style.backgroundColor){
            //aqui se efectia codigo cuando selecciono el color correcto
            alert("el color es: "+this.style.backgroundColor);
        }else{
            //aqui se ejecuta codigo en el caso de fallar se pone el div color del fondo
            this.style.backgroundColor=colorFondo;
        }
        
    });  
}
//variable que almacena el color escogido
var colorEscogido=colors[generarColor(5)].style.backgroundColor;
console.log("color escogido es  "+colorEscogido);
colorUnico.innerHTML=colorEscogido;
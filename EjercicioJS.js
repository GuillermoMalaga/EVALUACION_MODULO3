//arreglo de coleres
var colors = document.querySelectorAll(".square");
console.log("esto en un aproba");
console.log(colors);
//funcion para generar colores aleatorios
function generarColor(){
    return Math.floor(Math.random() * (255));
}
console.log(generarColor());
console.log(generarColor());
console.log(generarColor());
console.log(generarColor());
for (let i = 0; i < 3; i++) {
    colors[i].style.backgroundColor="RGB("+generarColor()+", "+generarColor()+", "+generarColor()+")";
    
}
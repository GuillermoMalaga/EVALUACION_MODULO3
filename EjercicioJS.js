//arreglo de coleres
var colors = document.querySelectorAll(".square");
var colorUnico= document.querySelector(".colorDisplay");
var tituloH1=document.querySelector("h1");
var colorFondo="RGB(35, 35, 35)";
var boton=document.querySelector("#boton");
var colorEscogido="";

console.log("esto en un aproba");
console.log(colors);
//funcion para generar numeros  aleatorios
function generarColor(num){
    return Math.floor(Math.random() * (num));
}
function Inicio(){
    for (let i = 0; i < 6; i++) {
        let colorCuadro="RGB("+generarColor(255)+", "+generarColor(255)+", "+generarColor(255)+")";
        colors[i].style.backgroundColor=colorCuadro;
        console.log(colors[i].style.backgroundColor);  
        colors[i].addEventListener("click",function(){
            if(colorEscogido==this.style.backgroundColor){
                //aqui se efectua codigo cuando selecciono el color correcto
                console.log("el color es: "+this.style.backgroundColor);
                for (let j = 0; j < colors.length; j++) {
                    colors[j].style.backgroundColor=colorEscogido;
                    tituloH1.style.backgroundColor=colorEscogido;
                    
                }
            }else{
                //aqui se ejecuta codigo en el caso de fallar se pone el div color del fondo
                this.style.backgroundColor=colorFondo;
            }
            
        });  
    }
    colorEscogido=colors[generarColor(5)].style.backgroundColor;
    colorUnico.innerHTML=colorEscogido;
}
Inicio();
boton.addEventListener("click",function(){
    Inicio();
    tituloH1.style.backgroundColor="RGB(35, 35, 35)";
});
//variable que almacena el color escogido

console.log("color escogido es  "+colorEscogido);
//colorUnico.innerHTML=colorEscogido;
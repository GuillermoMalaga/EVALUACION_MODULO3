//arreglo de colores
var colors = document.querySelectorAll(".square");
var colorUnico= document.querySelector(".colorDisplay");
var tituloH1=document.querySelector("h1");
var colorFondo="RGB(35, 35, 35)";
var boton=document.querySelector("#boton");
var colorEscogido="";

// var  padreDiv=colors[0].parentNode;
// colors[3]= padreDiv.removeChild(colors[3]);
// colors[4]= padreDiv.removeChild(colors[4]);
// colors[5]= padreDiv.removeChild(colors[5]);

console.log("esto en una prueba");
console.log(colors);

//funcion para generar numeros  aleatorios
function generarColor(num){
    return Math.floor(Math.random() * (num));
}

//funcion para colocae los cuadros segun sea facil o dificil
var facil=document.querySelector("#facil");
var dificil=document.querySelector("#dificil");

dificil.addEventListener("click",function(){
    if(document.querySelectorAll(".square").length>3){
        console.log("El numero de cuadros es mayor a 3");
        let padre=colors[0].parentNode;
        colors[3]=padre.removeChild(colors[3]);
        colors[4]=padre.removeChild(colors[4]);
        colors[5]=padre.removeChild(colors[5]);      
        Inicio();  
    }else{
        console.log("El numero de cuadros es igual a 3");
    }
});

facil.addEventListener("click",function(){
    if(document.querySelectorAll(".square").length>3){
        console.log("El numero de cuadros es mayor a 3");
    }else{
        console.log("El numero de cuadros es igual a 3");
        let padre=colors[0].parentNode;
        padre.appendChild(colors[3]);
        padre.appendChild(colors[4]);
        padre.appendChild(colors[5]);        
        Inicio();
    }
});

function Inicio(){
    let colors = document.querySelectorAll(".square");
    for (let i = 0; i < colors.length; i++) {
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
    colorEscogido=colors[generarColor(colors.length)].style.backgroundColor;
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
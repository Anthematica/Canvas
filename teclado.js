
//Variable que contiene dentro otras variables
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};


// Contexto del canvas
var canvas = document.getElementById("draw");
var lienzo = canvas.getContext("2d");

document.addEventListener("keyup", dibujarTeclado);

var x = canvas.width/2;
var y = canvas.height/2;

var x1 = canvas.width/2;
var y1 = canvas.height/2;


function dibujarTeclado(evento) {
	
	var aumento = 10;
	/*
	if (evento.keyCode == teclas.UP){
		drawlines(h, k, h, k-aumento, "red");
		h = h;
		k = k-aumento;
	}
	*/
	if (evento.keyCode == teclas.RIGHT){
		drawlines(x, y, x + aumento, y, "red");
		x = x + aumento
	}
	if (evento.keyCode == teclas.LEFT){
		drawlines(x1, y1, x1 - aumento, y1, "red");
		x1 = x1 - aumento;
	}
}

function drawlines(xinicial, yinicial, xfinal, yfinal, colorcito){
	lienzo.beginPath(); //Arrancar un trazo
	lienzo.strokeStyle = colorcito; //Elegir el color de la linea
	lienzo.moveTo(xinicial, yinicial); //Metodo para arrancar
	lienzo.lineTo(xfinal, yfinal); //Metodo para trazar una linea
	lienzo.stroke(); //Esto dibuja la linea
	lienzo.closePath(); //Levantamos el lapiz
} //300 en x 300 en y

// Esperamos el contenido del elemento de ventana para hacer las operaciones 
window.addEventListener('load', ()=>{ 
		
	redimensionar(); // Redimensionamos el tamaño del canvas al cargar la Página 
	document.addEventListener('mousedown', iniciarDibujado); 
	document.addEventListener('mouseup', detenerDibujado); 
	document.addEventListener('mousemove', dibujo); 
	window.addEventListener('resize', redimensionar); 
}); 
	
// Seleccionamos el id del elemento 
const canvas = document.querySelector('#micanvas'); 

// Contexto del canva para operaciones 2d 
const ctx = canvas.getContext('2d'); 
	
// Redimensionamos el tamaño del canvas según el tamaño de la ventana 
function redimensionar(){ 
	ctx.canvas.width = window.innerWidth; 
	ctx.canvas.height = window.innerHeight; 
} 
	
// Colocamos el curos en su posición inicial 
let coordenadas = {x:0 , y:0}; 

// Con esta variable se inicia deshabilitado el dibujado en el Canvas 
let dibujar = false; 
	
// Actualizamos las coordenadas del cursor cuando un evento se dispara
function obtenerPosicion(event){ 
	coordenadas.x = event.clientX - canvas.offsetLeft; 
	coordenadas.y = event.clientY - canvas.offsetTop; 
} 

// Habilitamos el dibujado en el Canvas  
function iniciarDibujado(event){ 
	dibujar = true; 
	obtenerPosicion(event); 
} 

// Detenemos el dibujado 
function detenerDibujado(){ 
	dibujar = false; 
} 
	
function dibujo(event){ 
	
	if (!dibujar) return; 

	ctx.beginPath(); 
		
	ctx.lineWidth = 5; 

	// Trazo redondeado 
	ctx.lineCap = 'round'; 
		
	// Color del trazo del dibujo en el Canvas 
	ctx.strokeStyle = '#5858ef'; 
		
	// El cursor para comenzar a dibujar se mueve a esta coordenada 
	ctx.moveTo(coordenadas.x, coordenadas.y); 

	// La posición del cursor se actualiza a medida que movemos el mouse alrededor del Canvas 
	obtenerPosicion(event); 

	// Se traza una línea desde el inicio 
	ctx.lineTo(coordenadas.x , coordenadas.y); 
		
	// Dibujamos las líneas  
	ctx.stroke(); 
} 

//Esta variable guarda una referencia al control de resultado, se declara global para no tener que estar ejecutando document.getElementById en cada ocasión que se necesite
let ctrlMostrado = document.getElementById('salida');

function dibujaTarjetas(arreglo) {
	let imprime = "<table id='registro'><tr><th>Habitación</th><th>Huesped</th></tr>";
	//La siguiente estructura de for es casi ya un arcaísmo. Sin embargo, los clásicos nunca mueren.
	for (let i = 0; i < arreglo.length; i++) {
		imprime += "<tr><td>" + arreglo[i].numHabitacion + "</td><td>" + arreglo[i].nombreHuesped + "</td></tr>";
	}
	imprime += "</table>"
	ctrlMostrado.innerHTML = imprime;
}

function ordenaPorHabitacion(arreglo) {
	function qsort(registro){
		if(registro.length<=1)
			return registro;

	{else}
	var pivote=math.rand()*(registro.length-1);
var max=[];
var min=[];
var p=[];
for(var numHabitacion int registro)
if (pivote>numHabitacion)
	min.push(numHabitacion);
else if (pivote<el)
max.push(numHabitacion);
else
p.push(numHabitacion);

return (qsort(min)).concat(p.qsort(max));
	//En esta función escribe la función que ordenará el arreglo por habitación
}

function ordenaPorHuesped(arreglo) {
	//Acá puedes hacer la otra que ordene por el nombre del huesped
}


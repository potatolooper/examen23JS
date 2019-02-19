
//El titulo 💥💥
document.write('<h1> Academia de mates</h1>')

//Esto ya no funciona porque la variable de repetir ya no lo considera como 1
function repetir (){
	document.location.reload();
	return;
}

//Variable para la puntuacion
var i = 0;


//la Variable y el while para poder repetir el ejercicio
var repetir = 1;

while (repetir == 1){

//Esto es la prgunta para que elija si quiere sumar o multiplicar
var opciones = prompt('Elige si quieres ejercicios de sumar o si quieres de multiplicar')

//El switch para elegir la opcion y en consecuencia que aparecan las preguntas
switch(opciones){
		//La opcion de suma 

	case 'sumar':
		alert('Pues ahora toca sumar numeros,cuando te salga la cuenta tienes que escribir el resultado');

		//El for para que se repita 3 veces
		
		for (var z = 1; z < 4 ; z++) {
					
	
		
		//Creacion de los numeros random
		var num1 = Math.random();
			num1 = 10*num1;
			num1 = Math.round(num1);

			var num2 = Math.random();
			num2 = 10*num2;
			num2 = Math.round(num2);
			
		//Para tener registro de los numeros usados	

		document.write(num1 + ',' + num2 + '|')

		//Una variable para que sepa luego cual era el resultado verdadero

		var resultado5 = num1 + num2;

		//La pregunta del resultado

		var resultado1 =prompt ( 'Primera suma ' + num1 + ' + ' + num2 ) ;

		//El if para comprobar si el resulrado esta bien


		if (resultado1 == num1 + num2) {

			alert('Muy bien pasemos al siguiente')

			i = i + 10;
		}

		else {
			alert('Lo siento es incorrecto,el resultado era '+ resultado5 + ' pero puedes probar en el siguiente')
		}

				}		
		break;

		//El mismo case pero para multiplicar

	case 'multiplicar':
		alert('Pues ahora toca multiplicar numeros,cuando te salga la cuenta tienes que escribir el resultado')

		//El mismo for

	for (var z = 1; z < 4 ; z++) {
					

			
		
		//Creacion de los numeros random
		var num1 = Math.random();
			num1 = 10*num1;
			num1 = Math.round(num1);

			var num2 = Math.random();
			num2 = 10*num2;
			num2 = Math.round(num2);
	
		//Para tener registro de los numeros usados	

		document.write(num1 + ',' + num2 + '|')

		//Una variable para que sepa luego cual era el resultado verdadero
		var resultado5 = num1 * num2;

		//La pregunta del resultado

		var resultado2 = prompt ( 'Primera suma ' + num1 + ' x ' + num2 ) ;

		//El if para comprobar si el resulrado esta bien

		if (resultado2 == num1 * num2) {

			alert('Muy bien pasemos al siguiente')

			//Para aumentar el contador de puntuacion
			i = i + 10;
		}

		else {
			alert('Lo siento es incorrecto,el resultado era '+ resultado5 + ' pero puedes probar en el siguiente')
		}
}

	break;	

	default:
	 alert('algo falla cuidao');
	 break;	


}
//La confirmacion de que quieres repetir
repetir = confirm ('Quieres repetir el ejercicio')
}

if (i==30) {
	document.write('<h2>💥💥 Eres un campeon,figura,mastodonte,ciclon,seguro que apruebas 💥💥 </h2>' + '<br>')
}

else if (i==60) {
		document.write('<h2>💥💥 Eres un campeon,figura,mastodonte,ciclon,seguro que apruebas y ademas tienes un positivo 💥💥 </h2>' + '<br>')

}
else if (i==90) {
		document.write('<h2>Te gustan las mates eh</h2>' + '<br>')

}
else {
	document.write('<br> Mala suerte compañero otra vez sera')
}

//Muestra tu puntuacion
document.write('<br> Esta es tu puntuación  ' + i +  ' <br>')
//La escritura del boton
document.write('<br> <button onclick="repetir()"> No funciona no lo intentes </button>')

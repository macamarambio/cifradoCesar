/*Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje 
encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha 
							Por ejemplo:
							Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
							Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG
Consideraciones Específicas

Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. 
Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
El usuario no debe poder ingresar un campo vacío o que contenga números

*/


function principal(){
	do{
		var valid = /[A-z\s]/;  //expresion regular con las condiciones de la frase a subir
		var phrase = prompt('Ingrese una frase'); // Pedirle al usuario que ingrese una frase

		if(!valid.test(phrase)){ 
			if(phrase == ''){	// si la frase esta vacia o no cumple con las condiciones
				alert('Ingresa una frase válida, recuerda ingresar solo caracteres de la A a la Z');  
			}
		}

	} while (!valid.test(phrase)|| phrase == ''); // volver a preguntar hasta que ingrese una frase válida
	do{
	// pedirle al usuario que elija lo que desea hacer con su frase
		var respuesta = prompt("Indique el número de lo que desea hacer con su frase: 1)cifrar - 2)descifrar");
		
		if(respuesta != ""){ 	// si la respuesta es igual a 1, utilizar la funcion de cifrar function cipher()
			if(respuesta == "1") {
				cipher();
			} else if(respuesta == "2") { // si la respuesta es igual a 2, utilizar la funcion de descifrar function desCipher()
				descipher();
			} else {
				alert("Ingrese una opción válida");  // si no ingresa una opción valida volver a pedir que ingrese una frase
			}
		} // si la respuesta no es 1 o 2 volver a preguntar que desea hacer con su frase
	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));  

	function cipher(){ // funcion cifrar
		var result = [];  // variable para guardarar la frase por separado
		var ascii; // posicion de los caracteres segun el PC  
		for (var i = 0; i < phrase.length; i++){ //condicion para letras mayusculas 
			ascii = phrase.charCodeAt(i); //(x - (nº en ASCII) + n) % 26 + (nº en ASCII)
			var higth = (ascii - 65 + 33) % 26 + 65;   //guardar estos números para aplicar String.fromCharCode()
			var cesarCipher = String.fromCharCode(higth);
			result.push(cesarCipher);
		}if(ascii >= 97 && ascii <= 122){ // condicion para letras minusculas
			var less = ((ascii - 97 + 33) % 26 + 33) % 26 + 97; 
			var cesarCipherLess = String.fromCharCode(less);   //guardar estos números para aplicar String.fromCharCode()
			result.push(cesarCipherLess);
		}else if(ascii == 32){
			result.push(''); //agregar texto a un array 
		}
			return alert(result.join('')); //mostrar el texto cifrado
	}

	function descipher(){ //funcion descifrar 
		var result2 = []; // variable para guardarar la frase por separado
		for (var k = 0; k <phrase.length; k++){
			var ascii2 = phrase.charCodeAt(k);
			if(ascii2 >= 65 && ascii2 <= 90){ //letras mayusculas
				var higth2 = (ascii2 - 65 - 33 + 26*2) % 26 + 65;
				var cesarDescipher = String.fromCharCode(higth2); //guardar estos números para aplicar String.fromCharCode()
				result2.push(cesarDescipher);
			} else if(ascii2 >=97 && ascii2 <= 122){ //letras minusculas
				var less2 = (ascii2 - 97 - 33 + 26*2) % 26 + 97;
				var cesarDescipherLess = String.fromCharCode(less2); //guardar estos números para aplicar String.fromCharCode()
				result2.push(cesarDescipherLess) 
			} else if(ascii2 == 32){
				result2.push(''); // agregar texto a un array 
			}
		}
		return alert (result2.join('')); //unir las letras y mostrar el texto descifrado

	}
}


principal();

// Corregir la formula ya que no coincide texto cifrado y descifrado  
/* 
Funcion anterior, muy repetitiva y no funciona 
function principal2(){
	do{
		// pedirle al usuario que escriba 1 o 2 segun lo que desee hacer con su frase 
		var respuesta = prompt("Indique el número de lo que desea hacer con su frase: 1)cifrar - 2)descifrar");
		// validar que lo que ingrese el usuario sea solo 1 o 2 
		if(respuesta != ""){
			if(respuesta == "1") {
				cipher();
			} else if(respuesta == "2") {
				descipher();
			} else {
				alert("Ingrese una opción válida");     alerta en caso que el usuario ingrese una de las 2 opciones (1 o 2)
			}
		}
	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));
}

Función para Cifrar la frase ingresada
Pedirle al usuario que ingrese una frase para cifrar 	 
function cipher(){
	do{	
		var valid = /^[A-z\s]*$/  	expresión regular, para validar que la frase solo contenga letras de la A-Z y a-z
		var phrase1 = prompt("Ingrese una frase");
		
		if(valid.test(phrase1)){ 	 validación de lo que no debe contener la frase
			if(phrase1 != ''){
				cesarCipher(); 		en caso de cumplir los requisitos ejecutar funcion cesarCipher	
			}else{
				alert("Ingresa una frase, recuerda no ingresar números"); 	 alerta en caso de no cumplir con los requisitos de la frase
			}
		}
	} while (!valid.test(phrase1));
}
  

Función para Descifrar la frase ingresada
Pedirle al usuario que ingrese una frase para descifrar  

function descipher(){
	do {
		var valid2 = /^[A-z\s]*$/			expresión regular, para validar que la frase
		var phrase2 = prompt("Ingrese una frase");
	
		if(valid2.test(phrase2)){ 	 validación
			if(phrase2 == ''){
				desCesarCipher(); 	en caso de cumplir los requisitos ejecutar funcion desCesarCipher	
			}else{
				alert("Ingresa una frase, recuerda no ingresar números");  	 alerta en caso de no cumplir con los requisitos de la frase
			}
		}
	} while (!valid.test(phrase2));
}
  

incluir formula para letras minusculas 

function cesarCipher(){ 	formula cifrado cesar 
	var resultCipher = []; 
	for (var i = 0; i <phrase1.length; i++){
		phrase2.CharCode([k])
		resultCipher.push(([i] - 33 + 26) % 26); 	(x-33 + 26)% 26  	No afecta en nada la formula, solo ayuda a que el numero no esa negativo 
	}
	alert(resultCipher);    crear una variable que contenga la frase cifrada 
}

function desCesarCipher(){    formula descifrado cesar 
		var resultDescipher = []; 
	for (var k = 0; k <phrase2.length; i++){
			phrase2.CharCode([k])
		resultDescipher.push((([k] - 33) + 26) % 26 + 65);      (x-33 + 26)% 26  No afecta en nada la formula, solo ayuda a que el numero no esa negativo 
	}
	alert(resultDescipher); 
}
        

principal2();




*/

	
# Cifrado César

+ **Programa:** 
	- *Transforma una frase utilizando el Cifrado Cé*
+ **Entrada:** 
	- *frase que el usuario desea cifrar o descifrar*
+ **Salida:** 
	- *texto cifrado o descifrado*




```javascript

Pseudocódigo 
Cifrado César
    
Codigo Dividido en 3 funciones

 Función principal
 	 Por medio de un prompt() pedirle al usuario que una frase
	    Si ingresa un campo vacío o numeros 
	    Mostrar alerta 'Ingresa una frase válida, recuerda ingresar solo caracteres de la A a la Z'
	Volver a preguntar hasta que ingrese una opción valida 
	        
	Por medio de un prompt () pedirle al usuario que elija lo que desea hacer con su frase
		opción 1) Cifrar 
		opción 2) Descifrar 

		si la respuesta es igual a 1, utilizar la funcion de cifrar function cipher()
		si la respuesta es igual a 2, utilizar la funcion de descifrar function desCipher()
		si no ingresa una opción valida volver a pedir que escoja una opción, hasta que elija 1 o 2 
	
funcion cifrar
		crear una variable para guardarar los caracteres de la frase por separado
		Crear 2 for uno que funcione con letras mayusculas y otro para letras minusculas 
			letras mayusculas 
			aplicar la formula (x - (nº en ASCII) + n + 26 para obtener solo numeros positivos) % 26 + (nº en ASCII)guardar estos numeros en una nueva variable para aplicar String.fromCharCode()
			...
	


```	



#### Este código es la versión `0.0.1` 

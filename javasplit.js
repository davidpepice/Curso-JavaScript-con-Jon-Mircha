/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/


function strings(string) {
    return string.length
}
//console.log(strings("Hola Mundo"));

function textoRecortado(string) {
    return string.substr(0,4)
    // recorre cada letra del strings
    // for (let i = 5; i < string.length; i++) {
    //     return console.log( string[i]);
    //  }
}
//console.log(textoRecortado("Hola Mundo"));

function textoSeparado(string) {
    return string.split(" ");
}
///console.log(textoSeparado("Hola Mundo Agradable"));

function repitaUnTexto(string) {
    for (let i = 0; i < 3; i++) {
        //console.log(string);
    }
    
}
repitaUnTexto("Hola Mundo")

/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

function palabrasInvertida(strings) {
    return strings.split('').reverse().join('')
}
//console.log(palabrasInvertida("Hola Mundo"));

var strings = ["hola", "mundo", "adios", "mundo"];
var contador = "mundo";
function palabraRepetida(strings, contador) {
  var veces = 0;
     for (let i = 0; i < strings.length; i++)         {
        if (strings[i] == contador) {
          veces++
           
        }
        
    }
     console.log("Veces que se repite "+veces);
}
//palabraRepetida(strings, contador);

var string = ['xyz1','xyz2','xyz3','xyz4','xyz5'];

function eliminarCaracteres(string, caracteres) { 
    // const regex = /xyz/ig;
    //console.log(string.replace(regex, '')); 
    // Expected output: "I feel Happy! Happy! Happy! "
}    
//eliminarCaracteres(string)
 /*
 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

function aleatorio( ) {
    var min = 501;
    var max = 601; 
    var x = Math.floor((Math.random() * 100 ) + 500);
    console.log(x);
}
//aleatorio();

function capicúa(numero) {
   var numeroInviertido = numero.toString().split('').reverse().join('');
   var numeroRevertido = numero.toString().split('').join('');
   
     for (let i = 0; i < numeroInviertido.length; i++)   { 
         if(numeroRevertido == numeroInviertido){
               console.log("Es capicua");
         }
         else{
               console.log("No es capicua" );
         } 
  }
}
//capicúa(1881);

/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

function esPrimo(primo){
    if (primo == 0) return 0;
    if (primo <= 1) return 0;
    for (var i = 2; i < 3; i++) {
        if (primo % 2 == 0) {
            console.log("No es primo" );
        } 
        else {
            console.log("El " + primo +" es primo" );
         }
     }
}
//esPrimo(7);

 
function parInpar(par) {
    if(par <= 1) return false
    if(par == 0) return false
        if (par % 2 == 1) {
            console.log("Es Inpar");
        }
        else{
            console.log("Es par");
        } 
}
//parInpar(20);

// (0 °C × 9/5) + 32 = 32 °F


function deCentigradosAFahrenheit(grados) {
    // Celsius
    console.log(Math.floor((grados - 32) * 5 / 9) + " °C");

    // Fahrenheit
    console.log((grados * 9 / 5) + 32 + " °F");
}
//deCentigradosAFahrenheit(0)


/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/
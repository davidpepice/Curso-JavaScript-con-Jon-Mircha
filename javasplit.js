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
        console.log(string);
    }
    
}
//repitaUnTexto("Hola Mundo")

/*function capicúa(numero) {
     var numeroInviertido = numero.toString().split('').reverse().join('');
  
     var numeroRevertido = numero.toString().split('').join('');
     for (let i = 0; i < numeroInviertido; i++)   { 
         if(numeroRevertido === numeroInviertido){
          return console.log("Es capicua");
           
         }else{
          return console.log("No es capicua" );
         } 
  }
   
}
 capicúa(2002);
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
function capicúa(numero) {
     var numeroInviertido = numero.toString().split('').reverse().join('');
  
     var numeroRevertido = numero.toString().split('').join('');
     for (let i = 0; i < numeroInviertido; i++)   { 
         if(numeroRevertido === numeroInviertido){
          return console.log("Es capicua");
           
         }else{
          return console.log("No es capicua" );
         } 
  }
   
}
 capicúa(2002);*/

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
 //deCentigradosAFahrenheit(101)


/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/
     
const binarioAdecimal = (numero, base) =>{
    if (base === 2) {
      return console.log(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    }else if(base === 10){
        return console.log(`${numero} base ${base} = ${numero.toString(2)} base 10`);
    }
}
//binarioAdecimal(4, 10);


const calcularDescuento = (precio, descuento = 0) =>
{ 
    console.log(`$${precio} - ${descuento}% = ${precio - (precio * descuento) / 100} `);
}
//calcularDescuento(1000,20)

const calculaaTiempo = (fecha = undefined) =>{
    // moment.js libreria
    // const fecha = new Date();

    // console.log(fecha.getHours());
    // console.log(fecha.getMinutes());
    // console.log(fecha.getSeconds());
    // console.log(fecha.getMilliseconds());

    // console.log(fecha.getDay());
    // console.log(fecha.getMonth());
   // console.log(fecha.getFullYear()); 
    // console.log(fecha.toString());
    // console.log(fecha.toDateString());
    // console.log(fecha.toLocaleString());
    // console.log(fecha.toLocaleDateString());
    // console.log(fecha.toTimeString());
    // console.log(fecha.toLocaleTimeString());
     
    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMs = 1000 * 60 * 60 * 24 * 365; 
    let AniosHumanos = Math.floor( hoyMenosFecha / aniosEnMs);
      
    if (Math.sign(AniosHumanos === -1)) {

        console.log(` Han pasado ${Math.abs(AniosHumanos)} años desde ${fecha.getFullYear()}`)  
        
    }else if (Math.sign((AniosHumanos) === -1)) {
        
        console.log(`Faltan ${AniosHumanos} años desde para el  ${fecha.getFullYear()}`)
    }else {

        console.log(`Estamos en el año actual ${fecha.getFullYear()}`); 
    }
 
}
//calculaaTiempo(new Date(2045,5,8));

/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/
function esVocal_O_Consonante(vocal)
{   
    let vocales = ["a","e","i","o","u"];
    let letrasVocalGuardadas = ""; 
    let letrasConsonantesGuardadas = ""; 
    for (var i = 0; i < vocales.length; i++) {
            if (vocales[i] == vocal || letrasVocalGuardadas !== vocal) { 
                letrasVocalGuardadas = vocales[i];  
                console.log(`Letras vocales ${letrasVocalGuardadas.length} .`) 
                
            } 
        }
        if(letrasVocalGuardadas.length === 0 || letrasVocalGuardadas !== vocal)
        {
            letrasConsonantesGuardadas = vocal
            console.log(`Letras consonantes${letrasConsonantesGuardadas}.`)
        }
    
}
// esVocal_O_Consonante("hola mundo");

/*
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/
const validarName = (nombre = undefined) => {
    // Expresión regular que valida si un carácter es una letra
    var regex = /^[a-zA-ZÑñ\s]+$/g.test(nombre); 
    // Verificamos si el nombre cumple con la expresión regular
    return (regex)  
    ? console.log(`Su nombre es ${nombre}`) 
    : console.log(`Su nombre ${nombre} no es valido`);
}
 //validarName("david pepice456")
/*
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

const emailValidacion = (email = undefined) => { 
    // Expresión regular que valida si un carácter es una letra
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g.test(email); 
    // Verificamos si el nombre cumple con la expresión regular
    return (regex)  
    ? console.log(`Su email es ${email}`) 
    : console.log(`Su email ${email} no es valido`);

}
//emailValidacion("daviddwe43caca.com")

/*
var Expreg = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
function testInfo(phoneInput) {
    var OK = re.exec(phoneInput.value);
    if (!OK) {
    console.error(phoneInput.value + ' isn\'t a phone number with area code!');
    } else {
    console.log('Gracias, tu número de teléfono es ' + OK[0]);}
}
*/ 
 




/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/
 const parEinpar = (numero, potencia = 0) => {
    var datos = []
    var resultado = Math.pow(numero , potencia)

    for (let i = 1; i < resultado.length; i++) { 
        console.log(resultado[i]); 
        datos.push(resultado[i]);  
    }
       return console.log(datos); 
 }
 parEinpar(4,2)



/*
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares,
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/
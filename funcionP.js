function letraRepetida(strings, letra) {
  var veces = 0;
  strings.split('')//.join(',');
  var letra = letra; 
     for (let i = 0; i < strings.length; i++){ 
        if (strings[i] === letra) {
          veces++ 
        } 
    }
    console.log("La letra " + letra + " se repite " + veces );
}
letraRepetida("esto es una prueba testeando los caracteres", "p") ; 
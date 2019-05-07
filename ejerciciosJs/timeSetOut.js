function pregunta() {
    var numRandom = parseInt(Math.random() * 50);
    var numRandom2= parseInt(Math.random() * 50);
    var respuesta = numRandom * numRandom2;
    console.log("¿Cuánto es " + numRandom + " x " + numRandom2 + "?");
      setTimeout(function() { console.log("La respuesta correcta es",respuesta); }, 3000);
  }
  
  pregunta();
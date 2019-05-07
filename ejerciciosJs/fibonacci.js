function fibonacci() {
    var resultado = 0;
    var num = 1;
    for (let i = 1; i <= 3; i++) {
      num = num + resultado;
      resultado = num + resultado;
      console.log(num + "\n" + resultado);
    }
  }
  fibonacci();
  //1, 1, 2, 3, 5, 8, 13, 21, 34, 55
function clock() {
    var num = 1;
    var segundos = setInterval(function() {
      console.log(num++);
      if (num == 61) {
        clearInterval(segundos);
      }
    }, 1000);
  }
  
  clock();
  
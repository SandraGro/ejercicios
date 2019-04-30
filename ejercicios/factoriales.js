/*function factoriales(num) {
  var f = 1;
  for (var i = 1; i <= num; i++) {
    f = f * i;
    console.log(i + " = " + f);

  }

};

factoriales(10);*/

function factorial (num){
  if(num == 0){
    return 1;
    }else{
      return num * factorial(num-1);
    }
  }

factorial (3);
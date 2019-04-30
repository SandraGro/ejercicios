function positivo(num){
  if(num >=0){
    return "Es positivo";
  }else{
    return negativo(num);
  }

}

function negativo(num){
  if (num < 0){
    return "Es negativo";
  }else{
    return positivo(num);
  }
}

positivo(0);
//negativo(-5);
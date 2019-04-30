function binary_search(arr, num) {
  var end = arr.length;
  var mid = Math.floor(end/2);

  if(end == 0){
    return -1;
  }
  
  if(num == arr[mid]){
    return arr[mid];
  }else if(num > arr[mid]){
    return binary_search(arr.slice(mid+1, end), num);
  }else{
    return binary_search(arr.slice(0, mid), num);
  }
}

// Casos de prueba
console.log(binary_search([11, 15, 16, 18, 22, 25, 27], 33) == -1);
console.log(binary_search([11, 15], 11) == 11);
console.log(binary_search([9, 10, 11, 15], 11) == 11);
console.log(binary_search([1, 2, 11, 15, 16, 17], 11) == 11);
console.log(binary_search([11, 15, 16, 18, 22, 25, 27], 25) == 25);
console.log(binary_search([11], 11) == 11);
console.log(binary_search([11], 19) == -1);
console.log(binary_search([], 19) == -1);

//Manual:
// Iniciamos con 11, 15, 16, 18, 22, 25, 27
// vamos a empezar con el indice 3 (=18) que es el centro del arreglo
// es el número que estamos buscando?
// si si, pos ya
// si no
//// el numero que busco es mayor que el centro? si sí, entonces ahora mi arreglo es de la mitad a la derecha
//// y si es menor, mi arreglo ahora es la izq

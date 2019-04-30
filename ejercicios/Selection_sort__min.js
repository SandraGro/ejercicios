function find_min(arr, start) {
  var min = start;

  for (var i = start + 1; i <= arr.length; i++) { 
    console.log("i = ",i," min =",min);
    console.log("comparando ", arr[i], "con ", arr[min]);
    if (arr[i] < arr[min]) {
      console.log("ahora min vale ", i);
      min = i;
    }
  }
  
  return min;
}

function selection_sort_using_min(arr) {
  var valor_temporal;

  for (var i = 0; i < arr.length; i++) {
    console.log("i =", i)
    var posicion_minimo = find_min(arr, i)
    console.log("El indice minimo fue", posicion_minimo, "que equivale a", arr[posicion_minimo])

    console.log("Volteando", arr[i], "con", arr[posicion_minimo])

    valor_temporal = arr[posicion_minimo]
    arr[posicion_minimo] = arr[i]
    arr[i] = valor_temporal

    console.log("Se actualiza el arreglo a", arr)
    console.log("------")
  }
  console.log("Se terminó el ciclo")
  console.log("Arreglo ordenado", arr)
}

selection_sort_using_min([23,8,4,16]);

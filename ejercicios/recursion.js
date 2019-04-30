var pos = 0;
function suma_arr(arr) {
  if (pos < arr.length) {
    let valor = arr[pos];
    pos++;
    return valor + suma_arr(arr);
  } else {
    pos=0;
    return 0;
  }
}
suma_arr([4,1,1, 8, 5, 14]);
function qSort(arr){
  if(arr.length <=1 ){
    return arr;
  }else{
   var pivot = Math.round(Math.random()* (arr.length-1));
   //console.log("posición", pivot);
   var pivot= arr[pivot];
   //console.log("valor",pivot);
   var max=[];
   var min=[];
   var p =[];

   for(var el in arr){
    var el= arr[el];
   // console.log(el);
     if(pivot > el){
       min.push(el);
     }else if (pivot < el){
       max.push(el);
     }else{
       p.push(el);
     }
   }
  }
  console.log(qSort(min));
return (qSort(min)).concat(p, qSort(max));
}



qSort([7,5,1,8,4,2,2,6]);
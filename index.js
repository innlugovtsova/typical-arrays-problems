
exports.min = function min (array) {
  
  if (array === undefined) { 
    return 0;
} else if (array[0] === undefined) { 
    return 0;
}  else {
  var minNum = array[0];
  for (var i = 0; i < array.length; i++){
    if (minNum > array[i])   minNum = array[i];
  }

  if (array.length === 0){
    return 0;
  }else 
  {
    return minNum;
  }
  
}}

exports.max = function max (array) {
  if (array === undefined) { 
    return 0;
} else if (array[0] === undefined) { 
    return 0;
}  else {
  var maxNum = array[0];
  for (var i = 0; i < array.length; i++){
    if (maxNum < array[i])  maxNum = array[i];
  }

  if (array.length === 0){
    return 0;
  }else 
  {
    return maxNum;
  }
}
}

exports.avg = function avg (array) {
  if (array === undefined) { 
    return 0;
} else if (array[0] === undefined) { 
    return 0;
}  else {  
  var avgNum = array[0];
  for (var i = 1; i < array.length; i++){
    avgNum += array[i];
  }
  
  if (array.length === 0){
    return 0;
  }else 
  {
    avgNum /= array.length;
    return avgNum;
  }
}}

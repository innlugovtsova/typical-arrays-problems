
exports.min = function min (array) {
  var minNum = array[0];
  for (var i = 0; i < array.length; i++){
    if (minNum < array[i]) minNum = array[i];
  }
  if (array.length != 0){
    return minNum;
  }else 
  {
    return 0;
  }
  
}

exports.max = function max (array) {
  var maxNum = array[0];
  for (var i = 0; i < array.length; i++){
    if (maxNum < array[i]) maxNum = array[i];
  }
  if (array.length != 0){
    return maxNum;
  }else 
  {
    return 0;
  }

}

exports.avg = function avg (array) {
  var avgNum = array[0];
  for (var i = 1; i < array.length; i++){
    avgNum += array[i]
  }
  if (array.length != 0){
    return avgNum;
  }else 
  {
    return 0;
  }
}
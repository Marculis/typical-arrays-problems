exports.min = function min (array) {
  return Math.min (null, array);
}

exports.max = function max (array) {
  return Math.max(null, array);
}

exports.avg = function avg (array) {
let sum = (accumulator, currentValue) => accumulator + currentValue;
return (sum / array.length);
}

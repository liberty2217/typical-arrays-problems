
exports.min = function min (array) {

  if (array == undefined || array.length == 0) {
    return 0;
  } else {
    return Math.min(...array);
    // The new spread operator is a shorter way of writing the apply solution to get the maximum of an array
  }

  // another way to solve:
  // let copiedArr = array.slice();
  // let sortedArr = copiedArr.sort(function(a, b) {
  //   return a - b;
  // });

  // return sortedArr[0];
}

exports.max = function max (array) {

  if (array == undefined || array.length == 0) {
    return 0;
  } else {
    return Math.max(...array);
  }
  
  // another way to solve:
  // let currentMax = 0;
  // for (let i = 0; i < array.length; i++) { 
  //   let maxValue = Math.max(currentMax, array[i]); 
  //   if (maxValue > currentMax) {
  //     currentMax = array[i];
  //   }
  // };
  // return alert(currentMax);  
}

exports.avg = function avg (array) {
  
  if (array == undefined || array.length == 0) {
    return 0;
  } else {
    let sumOfNumbers = array.reduce(function(a, b) {
      return a + b
    });

    return sumOfNumbers / array.length;
  }
}
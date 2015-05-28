var add = function(num) {
 var numSum = []

  var rValues = [1000,500,100,50,10,5,1]

  var newNum = num

  rValues.forEach(function(value) {
    var divide = (newNum / value);
    if (divide >= 1) {
      numSum.push(value)
      newNum = (newNum - value);
    }
    if (newNum > 0) {
      divide = (newNum / 1)
      numSum.push(1)
      newNum = (newNum - 1);
    }
  })
    return numSum;
  };

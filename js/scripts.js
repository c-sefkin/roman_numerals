var roman = function(number) {
  var answer = []
  var num = number;

  while (num >= 1000) {
    answer.push("M")
    num = (num - 1000);
  }

while (num >= 500) {
  answer.push("D")
  num = (num - 500);
}

while (num >= 100) {
  answer.push("C")
  num = (num - 100);
}

while (num >= 50) {
  answer.push("L")
  num = (num - 50);
}

while (num >= 40) {
  answer.push("L")
}

while (num >= 10) {
  answer.push("X")
  num = (num - 10);
}

while (num >= 5) {
  answer.push("V")
  num = (num - 5);
}

while (num >= 1) {
  answer.push("I")
  num = (num - 1);
}

return answer;

};



























// var add = function(num) {
//  var numSum = []
//
//   var rValues = [1000,500,100,50,10,5,1]
//
//   var newNum = num
//
//   rValues.for(var index = 1; ) {
//     var divide = (newNum / value);
//     if (divide >= 1) {
//       numSum.push(value)
//       newNum = (newNum - value);
//     }
//     if (newNum > 0) {
//       divide = (newNum / 1)
//       numSum.unshift(1)
//       newNum = (newNum - 1);
//     }
//   })
//     return numSum;
//
//     numSum.forEach(function(num) {
//
//     })
//   };

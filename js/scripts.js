var add = function(romanNum) {
 var numSum = []

  var rValues = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000,
  };

  var characters = romanNum.split("");
  characters.forEach(function(character){
    numSum.push(rValues[character]);
  });

  var total = 0;
    numSum.forEach(function(number) {
    total += number;
  })

    return total;
};

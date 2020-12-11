var number = [3, 56, 2, 48, 5];

/* using foreach loop 
// var newNum = 0;
// number.forEach(function (current) {
//   newNum += current;
// });

// console.log(newNum);*/




/*Using Reduce function*/

/*accumulator will be Equilent to newNum in above forEach*/
var acc = number.reduce(function(accumulator, current) {
    return accumulator += current;
});

console.log(acc);



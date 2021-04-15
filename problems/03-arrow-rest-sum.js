/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0
***********************************************************************/

// const arrowRestSum = (...num) => {
//   let total = 0;


//   for (let i = 0; i < num; i++) {
//     total += num[i];

//   }
//   return total;
// }

const arrowRestSum = (...num) => {
  let total = 0;

  num.forEach(ele => {
    total += ele;
  });
  return total;
}

console.log(arrowRestSum(3,5,6)); // => 14

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  return undefined;
}

/*In this exercise, we will be given an array of 
2 or more numbers. We will then have to find the 
two largest numbers in that array, and sum them together. */

/*how to compare to all the elements in the arry and not 
just elements that are side by side??? */

const sumLargestNumbers = function(data) {
  let largest1 = 0;
  let largest2 = 0;
  //let transferVariable; 
  for (let i = 0; i < data.length; i++) {
    /*if data[i] is greater than both current variables
    we want to assign it to the smallest of those two variables*/
    if ((data[i] >= largest1) && (data[i] >= largest2)) {
      /* if largest1 is currently the biggest of the two 
      variables then we want to keep it and reassign largest2*/
        if (largest1 >= largest2) {
          largest2 = data[i];
          /* if largest2 is currently the biggest of the two
          variables then we want to keep it and reassign largest1   */
        } else if (largest2 > largest1) {
          largest1 = data[i];
        }
      /* if data[i] is bigger than largest 1(and not bigger than largest2)
      then we want to assign it to largest 1  */
    } else if (data[i] > largest1) {
      largest1 = data[i];
    } 
      /* if data[i] is not bigger than largest 1 and is bigger than largest2
      then we want to assign it to largest 2  */
      else if (data[i] > largest2) {
        largest2 = data[i];
    }
  }
  return largest1 + largest2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

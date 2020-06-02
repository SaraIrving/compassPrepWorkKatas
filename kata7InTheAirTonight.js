/* For this challenge we will implement 
a function called checkAir(), which will 
check a collection of air samples.
 The function will take in two arguments. 
 The first argument is an array of strings,
  where each string represents a small air 
  sample that is either clean or dirty. 
  The second argument is a number representing 
  the highest acceptable amount of dirty samples. 
  For example, a threshold of 0.4 means that 
  there must be less than 40% of total samples 
  classified as dirty for our air to be considered 
  clean. Our function must return Polluted 
  if there are too many dirty air samples, 
  or Clean if the proportion of dirty samples 
  is below the threshold.
*/

/* Not sure where to get started? 
It might be useful to start by creating 
a variable to keep track of how many dirty samples 
we find as we loop through the array of samples. 
We can increment or add to this number using 
the ++ operator. Once you know how many dirty
 samples there are, we just need to do some 
 simple math to determine if it exceeds the 
 threshold.
*/

const checkAir = function (samples, threshold) {
  let numDirty = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      numDirty += 1;
    }
  }
  if ((numDirty / samples.length) >= threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))



/* 
Expected Output:
Polluted
Polluted
Clean
*/

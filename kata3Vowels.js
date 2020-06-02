/* In this exercise, we will be counting the number
 of vowels that appear in a given string. For this 
 exercise, consider the following to be 
 vowels: a, e, i, o, and u.

  Create a function named numberOfVowels that will 
  receive a string and return the number of vowels 
  in that string.     
   */


  const numberOfVowels = function(data) {
    let vowelCount = 0 ;
    for (letter of data) {
      if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        vowelCount += 1;
      }
    }
    return vowelCount;
  };
  


  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));


   /*
   Expected Output:
3
5
5
     */
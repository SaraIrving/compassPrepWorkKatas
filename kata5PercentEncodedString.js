/* In this exercise, we will be given a 
normal string of words and turn it into 
a percent-encoded string by replacing 
all whitespace with %20.   

Create a function named urlEncode that will 
receive a string of words, and return that 
string with all of the whitespace characters 
converted to %20. If there is whitespace on 
the outside of the string, like in our 
second example above, you should only replace
 the whitespace within the string.

 Use some sort of looping. 
 Do Not use String.prototype.replace
*/



const urlEncode = function(text) {
  const stringArray = [];
  for ( let i = 0; i < text.length; i++) {
    stringArray.push(text[i]);
    if (stringArray[i] === " ") {
      if ( i > 0 && i < (text.length - 1)){
        stringArray[i] = "%20";
      } 
    }
  }
  if (stringArray[0] === " ") {
    stringArray.shift();
  }
  if (stringArray[(text.length - 1) === " "]) {
    stringArray.pop();
  }
  let stringUpdated = stringArray.join('');
  return stringUpdated;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));




/* 
Expected Output:
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
*/
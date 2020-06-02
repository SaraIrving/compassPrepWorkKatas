/* In this exercise, we will be given a 
list of instructors and have to determine
 which instructor has the longest name.  
 
 Create a function named instructorWithLongestName 
 that will receive an array of instructor objects, 
 and return the object that has the longest name. 
 If there are two instructors with the longest name,
  return the first one.
 
 */

 //look at proper way to access parts and call methods on objects!!  

const instructorWithLongestName = function(instructors) {
  let longestLength = 0;
  let longestName = "";
  for (array of instructors) {
    if (array["name"].length > longestLength) {
      longestLength = array["name"].length;
      longestName = array;
    }
  }
  return longestName; 
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));


 /* 
 Expected Output:
{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"}
    */
// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, 
// using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which 
// is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();
// This method modifies the stiring 'Hello World' to all lower case letters 
// with an output of 'hello world'

"Hello World".includes("Hello");
// This method calls into action a boolean on the string 
// answering the question dose string 'Hello world' include 'hello'
// this method's outputs is true.

"Hello World".endsWith("Hello");
// This method calls into action a boolean on the string.
// answering the question dose string 'Hello world' end with 'hello'
// this method's outputs is false

"Hello World".endsWith("rld");
// This method calls into action a boolean on the string.
// answering the question dose string 'Hello world' end with 'rld'
// this method's outputs is true.

// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and 
// return value of that method.

var lastName = "Hluchan";
var zipCode = "80003";

// utility of the startsWith() method is to determine if a String '80003'
// starts with a '8', or not. Returning a boolean of 'ture' logged to the console
console.log(zipCode.startsWith("8"));

// utility of the endsWith() method is to determine if the String '80003'
// ends with a '2', or not. Returning a boolean of 'false' logged to the console
console.log(zipCode.endsWith("2"));

// utility of the includes() method is to determine if the String '80003'
// inclueds '000', or not. Returning a boolean of 'ture' logged to the console
console.log(zipCode.includes("000"));

// utility of the toUpperCase() method is to change the String 'Hluchan'
// to all upper case letters and will return 'HLUCHAN' 
console.log(lastName.toUpperCase());

// utility of the toLowerCase() method is to change the String 'Hluchan'
// to all lower case letters and will return 'hluchan' 
console.log(lastName.toLowerCase())


// EXAMPLE
// The startsWith() method is called on the firstName variable,
// which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName 
// variable starts with the argument passed in.
// In this example, the return value is true, because 
// "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() 
// method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and 
//return value of that method.

var ages = [36, 21, 68];
var numOfPets = [2, 5, 0];

// The method .pop() calls the last element in the array
// This returns "68"
console.log(ages.pop());


// The method .push calls the total number of elements in the array
// This returns "3"
console.log(numOfPets.push());
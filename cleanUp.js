// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() {
  console.log("Hello, what is your name?");
}

askForName()
// I reordered the function on 3 lines instead of one for better readability 
//plus the ; for best practice.

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  return sum;
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
// I indented lines 21 and 22 for readability
// I added a ; to the end on line 21 for best practices
// I removed the indention from line 23 moving } for better readability of 
//where the function ends.

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();
// I fixted the function syntex so that it works.
// I moved the end } to line 39 for readablity


//  EX 4:
function average(num1, num2){
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg
}

// I moved the first { to the end on line 47 for readability
// I indented `Var sum` for better readability
// I took one indention out before `var avg` for better readability
// I removed the empty line before `return avg` and indented it for better readability
// I removed the indention in front of the last } for better readability
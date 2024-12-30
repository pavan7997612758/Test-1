//Swap values question
/*/let x = 10;
let y = 20;

// Swap using arithmetic operations
x = x + y; // x becomes 30
y = x - y; // y becomes 10
x = x - y; // x becomes 20

console.log("x:", x); // x = 20
console.log("y:", y); // y = 10
*/

//PI value

/*const PI = 3.14;
PI = 3.1415; // This will throw an error: TypeError: Assignment to constant variable.
*/


//Greet Function
/*
function greet(name = "Kasula") {
    return `Hello, ${name}! Welcome!`;
  }

  console.log(greet("Pavan Kumar")); // "Hello, Pavan Kumar! Welcome!"
  console.log(greet()); // "Hello, Guest! Welcome!"
*/


//Convert a string to uppercase and extract a word:-


/*/const sentence = "Learning JavaScript is fun!";

// Convert to uppercase
const upperCaseSentence = sentence.toUpperCase();

// Extract the word "JavaScript"
const word = sentence.substring(9, 20); // Extracts from index 9 to 21

console.log(upperCaseSentence); // "LEARNING JAVASCRIPT IS FUN!"
console.log(word); // "JavaScript"
*/


//If-else statement checking score range:-


/*let score = 85;

if (score >= 90 && score <= 100) {
  console.log("Excellent");
} else if (score >= 70 && score <= 89) {
  console.log("Good");
} else {
  console.log("Needs improvement");
}
*/


//If-else statement with type checking:

/*let score = "85";

if (typeof score !== "number") {
  console.log("Invalid score");
} else if (score >= 90 && score <= 100) {
  console.log("Excellent");
} else if (score >= 70 && score <= 89) {
  console.log("Good");
} else {
  console.log("Needs improvement");
}
*/


//Switch statement with fruit prices:

/*let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("Apple costs $2");
    break;
  case "banana":
    console.log("Banana costs $1");
    break;
  case "orange":
    console.log("Orange costs $3");
    break;
  case "grape":
    console.log("Grape costs $5");
    break;
  default:
    console.log("Fruit not available");
}
*/


//Switch statement with case-insensitive handling:

/*let fruit = "APPLE";

switch (fruit.toLowerCase()) {
  case "apple":
    console.log("Apple costs $2");
    break;
  case "banana":
    console.log("Banana costs $1");
    break;
  case "orange":
    console.log("Orange costs $3");
    break;
  case "grape":
    console.log("Grape costs $5");
    break;
  default:
    console.log("Fruit not available");
}
*/

//Function square using regular syntax and arrow function:

// Regular function

/*function square(num) {
    return num * num;
  }
  console.log(square(4)); // 16

  // Arrow function
  const squareArrow = num => num * num;
  console.log(squareArrow(4)); // 16
*/


//Ternary operator to check if a number is even or odd:

/*let num = 7;
console.log(num % 2 === 0 ? "Even" : "Odd"); // "Odd"
*/
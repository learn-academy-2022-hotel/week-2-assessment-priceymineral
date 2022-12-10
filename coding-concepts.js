// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
console.log(cohort.split(""))

// a) Your answer: the method .split() converts a string into an array. The elements in the array are divided at the argument string, in this case "", ie, no space, therefore, the result array should be: ["Hotel 2022"]
// b) Verify and explain:
// [
//   'H', 'o', 't', 'e',
//   'l', ' ', '2', '0',
//   '2', '2'
// ]
// The argument string ("") determines how each of the characters in the string will be separated when converted into an array. In this case there is no space, so this method will be looking for nonspace to separate, therefore each of the characters will become its own separate string in the result array. It is worth noting that a space counts as a character as well.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student" The string "LEARN Student" is the argument for the name parameter.
// b) Verify and explain: undefined. I did not notice that there is no return statement, functions without return statements return the data type undefined by default. My answer would be correct if there had been a return keyword in front of the string.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain:[8, 10, 12, 14, 16]. the method .map() will iterate through the array it is called on and perform the code in the anonymous fxn given as argument. In this case it is multiplying each of the elements by 2. .map() then returns the modified array without the need of a return statement. 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: [11, 13, 15]. The array method .filter() iterates over the array it is being called on and performs the operations of the anonymous fxn given as an argument. In this case the anonymous fxn is checking for numbers whose remainder after multiplying by 2 is NOT 0, ie odd numbers. .filter() then returns the array with only the elements that meet the condition.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: "JavaScript" the variable myCodingSkills stores an object with 4 properties. These properties can be accessed either using bracket notation or, in this case dot notation. The value at the key languages is accessed first using dot notation, this value is an array (["JavaScript", "Ruby"]), and then the first element (index 0) in this array is accessed using bracket notation.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: object {student: "George", cohort: "Hotel", year: 2022}

// b) Verify and explain: Learn { student: 'George', cohort: 'Hotel', year: 2022 }. The variable learnStudent holds an instance of the Learn class, ie an object. This object will hold the same properties as its parent class. This class takes one parameter (name) which was given the value "George" when instantiated. 

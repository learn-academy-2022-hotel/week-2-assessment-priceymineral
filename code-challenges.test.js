// ASSESSMENT 2: Coding Practical Questions with Jest

const { isDirective } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// a) Create a test with expect statements for each of the variables provided.
// PSEUDO CODE
// write the jest test for a fxn called isDivisibyByThree
    // describe what it does
        // use the variables provided
        // run in terminal and check for "good" error ("fxn not defined")
describe("isDivisibleByThree", () => {
    it("returns a string telling us whether the input number is divisible by 3", () => {
        expect(isDivisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(isDivisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(isDivisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})
// b) Create the function that makes the test pass.
// PSEUDO CODE
// create a fxn that takes 1 object as a parameter
    // create a variable to store the number in question.Access the number input object 
    // if dividing the number by 3 returns 0
        // return "<number> is divisible by three"
    // else 
        // return "<number> is divisible by three"
const isDivisibleByThree = (obj) => {
    let num = obj.number 
    if (num % 3 === 0) {
        return `${num} is divisible by three`
    } else {
        return `${num} is not divisible by three`
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// a) Create a test with expect statements for each of the variables provided.
// PSEUDO
// create a test for a fxn called toCapitalLetters
    // it will test whether toCapitalLetters returns an array with all its strings capitalized
    // test each of the two input arrays
describe("toCapitalLetters", () => {
    it("returns the input array with all its string capitalized", () => {
        expect(toCapitalLetters(randomNouns1)).toEqual(["STREETLAMP", "POTATO", "TEETH", "CONCLUSION"])
        expect(toCapitalLetters(randomNouns2)).toEqual(["TEMPERATURE", "DATABASE", "CHOPSTICKS", "MANGO"])

    })
})

// b) Create the function that makes the test pass.
// PSEUDO
// Create a fxn that takes in an array of strings
    // loop through the array
        // capitalize the current string in the array 
        // push it to a new array
    // return the new array
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

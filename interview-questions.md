# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is a placeholder for a value in a function or class object, for example. When this function is called or class instantiated, this parameter can be  replaced by an actual value called an argument. Arguments can be any of the JS data types, including functions and classes. 

Researched answer: Parameters are variables passed into a function, and they are used in order to access values input to a function, these values are arguments and can be primitive or object. There can be 2 types of parameters, input and return/output (return/output not recommended since they cause confusion according to MDN web docs). Parameters refer to arguments when the function they are in is invoked, and this arguemnt in turn can be a reference to a value or an actual value depending on how the function is invoked.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map() takes an anonymous function, in this function, there are 3 positional parameters, only the first one, the current element in the iteration, is not optional. The second parameter is ??? and the third is the index of the current iteration. 

Researched answer: .map() takes 2 arguments: A callback function and thisArg. The callback function takes 3 arguments: element (element accessed in the current iteration), index (the actual index of the current element being processed), array (the actual array that the .map() method was called on). thisArg is optional and is a value used as (keyword) this in the callback function. 
Only the callback fn and the element in it are required. 

3. What is the difference between map and filter?

Your answer: .map() and .filter() are different in the purpose of the anonymous function. In the case of .map(), it is to perform the specified mutation to each of the elements of the array it is called on. .filter() evaluates the condition given in the callback function to determine the elements that the return array will hold. 

Researched answer: .filter() returns a subarray with only the elements that meet the condition specified in the callback function, .map() modifies each element of the array according to the code specified in the callback function. 

4. What is iteration?

Your answer: iteration is the traversal through the elements of an iterable piece of data. There are many ways to iterate, .map() and .filter() are examples, as well as .forEach() and for, while, for of loops.

Researched answer: Repeated execution of a set of instructions. Also a single instance or execution of a loop.

5. What is the difference between a class and an object?

Your answer: a class is used to create (instantiate) objects. a class is the template for creating objects using the keyword new. 

Researched answer: Objects are allocated memory space while classes are not. An object's properties and methods are defined and determined in the class that they are created from.

6. STRETCH: What is hoisting in JavaScript?

Your answer: the shifting of code (in the background) to the top of the file it is in, making it accessible to the rest of the code in the file since it is effectively defined first.

Researched answer: Hoisting refers to the ability of the interpreter to use a variable's value, reference a variable, or, for that variable to cause behavior changes in its scope, before it is declared. There are 3 types of hoisting behaviours:
Type 1: 
    - `function`
    - `function*`
    - `async function`
    - `async function*`
Type 2:
    - `var` declarations
Type 3:
    - `let` declarations
    - `const` declarations
    - `class` declarations 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: A plain language statement that describes a user's role, intent and reason in a brief (one to two lines) manner. They can be used as conversation starters to discuss and develop features software systems. 

2. Spread operator: It is used to place all the elements inside an iterable (array, string, object) into a desired space. e.g. using elements in an array as function arguments, or into another array to make a copy etc. 

3. React state: A JavaScript object in React defined and managed inside a React component. Contains attributes that can start with an initial default value but may be altered, typically by user input, these alterations cause the component to be re-rendered. 

4. React props: A JS object that is passed down to components from other components. The components that it is passed down to cannot alter it but it does cause the component it is in to re-render when altered.

5. DOM events: Changes to the state of the DOM. i.e. Execution of code caused by user inputs e.g. via peripherals. These inputs trigger the execution of code which causes alterations to the DOM. 

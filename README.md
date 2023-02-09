# javascript-documentation

## 0. What is Programming? Why programming?

- [Algorithm & Flowchart](https://www.javatpoint.com/algorithm-vs-flow-chart)

## 1. Introduction to Javascript

- What is Javascript?
  - A programming language for web.
  - it can be used in front-end and back-end
- Why Javascript?

  - It adds interactivity to the web page such as adding items to the carts, form validation etc.
  - Example: Create a button with HTML, Style with CSS and add clicking functionality by using javascript
  - A demo for the need of JS

## 2. Output & comment

- output functions: functions that will help you to show output such as document.write(), console.log(), alert()
- console has variations: console.clear(), console.error(), console.info(), console.warn()
- console will help the developers for finding any error during the development process.
  console.log() allows you to visualize your code in the console.
  - The console is only visible to you (the developer), but not the end-user.
  - console.log() helps you find bugs.
  - console.log does NOT replace return
  - console.log will never modify the result of a function, it will just show you a string or a number in the Console.
- Example

  ```js
  // single line comment
  document.write("Welcome to JS Program");
  document.write("<h1>Welcome to JS Program</h1>");

  console.log("fullName : Frances Fogarty");

  /*
   multiple 
   line 
   comment
   */
  alert("welcome to js program");
  ```

- **Tasks: Can you print your name, age, address?**
- Program 1: E-Commerce app [printing product details]

  ```js
  // prodcut details
  /*
  id : 1
  title : iphone 12
  description: brilliant phone with 4k camera
  price : 549
  discountPercentage : 8
  rating : 4.69
  brand : Apple
  */

  // product actual price calculator [printing product details]
  console.log("id : 1");
  console.log("title : iphone 12");
  console.log("description: brilliant phone with 4k camera");
  console.log("price : 510");
  console.log("discountPercentage : 8");
  console.log("rating : 4.69");
  console.log("brand : Apple");
  ```

- setup prettier code formatter

## 3. Tokens

- Tokens are backbone of any programming language. Important tokens: keywords, puncuators, data type, variables, operators, escape sequences etc.
- Keywords: javascript reserved words for specific reasons.

  - Example - abstract, break, char, double, export, import, try, catch, finally, throw, throws, if, else, switch, case, break, default, continue,for, while, do, var, let, const, class, extends, implements, public, private, protected, new, static, this, true, false, boolean, string, number, function, instanceof

- puncuators
  - () round brackets / parentheses
  - {} curly brackets / braces
  - [] square brackets / brackets
  - <> angle brackets / chevrons
  - ; semicolon, : colon
- Escape sequnces: \ characters
- Data types

  - [typeof operator] can help us to find out the data type of a value

  - Data types can be divided into 2: primitive & non-primitive/reference.
  - Primitive data types: String, Number, Bigint, boolean, null, undefined, symbol

    - Example

      ```js
      // primitive data types -> String, Number, Boolean, null, undefined, Symbol

      // String data type -> textual data
      console.log(typeof "John"); // string
      console.log(typeof ""); // empty string

      // Boolean data type -> true / false
      console.log(typeof true); // boolean

      // Number data type -> integer / floating point number
      console.log(typeof 123); // number
      console.log(typeof 123.5); // number

      // Undefined: variable is declared but no value is assigned
      // Undefined -> data type for variable without value
      console.log(typeof x); // undefined

      // null ->  represent no value; (fun: typeof null is object)
      console.log(typeof null);

      /*
      Symbol is used as an identifier for object properties
       Symbols are unique identifiers
       introduced in ES6
       it can be used when defining constants such as enum for uniqueness
       */
      const symbol1 = Symbol("foo");
      const symbol2 = Symbol("foo");
      console.log(typeof symbol1); // symbol
      console.log(symbol1 === symbol2); // false
      ```

  - Non Primitive data types: Object (Array is also part of Object type), Function, RegEx, Date

    - Example

      ```js
      // Object type -> instance for accessing its members
      console.log(tyoeof {name: 'anis'});
      console.log(typeof [1,2,3]) // array is object type

       // function type
       console.log( typeof function display () { }) // function type

      ```

  - what are the differences between primtive & non-primitive data types?
    ![primitive vs non-primitive](images/difference-between-primitive-and-non-primitive-datatypes-12-1650387712.png)

- Variables

  - Varibale is a placeholder for storing data.

    ```js
    let title = "iphone 12";
    let price = 510;
    let discountPercentage = 8.5;
    ```

  - variables naming rules (collected from w3school)

    - The general rules for constructing names for variables (unique identifiers) are:
    - Names can contain letters, digits, underscores, and dollar signs.
    - Names must begin with a letter
    - Names can also begin with $ and \_ (but we will not use it in this tutorial)
    - Names are case sensitive (y and Y are different variables)
    - Reserved words (like JavaScript keywords) cannot be used as names

  - 4 most popular variable naming style out of many formats [naming conventions](<https://en.wikipedia.org/wiki/Naming_convention_(programming)>)
    - Underscore: first_name, last_name
    - Upper Camel Case (Pascal Case): FirstName, LastName -> normally used for Classes (nouns)
    - Lower Camel Case: firstName, lastName -> normally used for methods/variables
    - SCREAMING SNAKE CASE / CONSTANT_CASE for naming constants
  - var vs let vs const

    - 2 important things: reassign, scope - block, function, global
    - var variable can be reassigned and function scoped. var variables also become part of window object which can be overriden. try window.varName

      ```js
      var name = "alex";
      name = "robin"; // reassign allowed for var variables

      if (true) {
        var age = 32;
      }

      console.log(name);
      console.log(age); //  allowed as var variable is function scoped
      ```

    - let variable can be reassigned but blocked (a set of curly braces) scoped.

      ```js
      let name = "alex";
      name = "robin"; // reassign allowed for let variables

      if (true) {
        let age = 32;
      }

      console.log(name);
      console.log(age); // not allowed as let variable is block scoped
      ```

    - const variable can not be reassigned but blocked (a set of curly braces) scoped. const object can be changed by its properties.

      ```js
      const name = "alex";
      name = "robin"; // reassign is not allowed for const variables

      if (true) {
        const age = 32;
      }

      console.log(name);
      console.log(age); //  not allowed as const variable is blocked scoped
      ```

  - [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) vs [Falsy value](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
    - falsy value: false, 0, 0.0, -0, -0.0, "",'',``,null, undefined, NAN
    - truthy value: all values except falsy value. {}, [], new Date(), Infinity etc.
  - Program 2: E-Commerce app [printing product details dynamically]

    ```javascript
    // Program 2: printing product details dynamically
    const id = 101;
    const title = "iphone 12";
    const description = "brilliant phone with 4k camera";
    const price = 549;
    const discountPercentage = 8;
    const rating = 4.69;
    const brand = "Apple";

    console.log("id : " + id);
    console.log("title : " + title);
    console.log("description: " + description);
    console.log("price : " + price);
    console.log("discountPercentage : " + discountPercentage);
    console.log("rating : " + rating);
    console.log("brand : " + brand);
    ```

- Operators & string concatenation

  - Symbol that helps us to do mathmatical operation
  - Arithmetic operators : +, -, \*, /, %
  - Program 3: E-Commerce app [operators]

    ```js
    // Program 3: E-Commerce app [operators]
    const id = 101;
    const title = "iphone 12";
    const description = "brilliant phone with 4k camera";
    const price = 549;
    const discountPercentage = 8.5;
    const rating = 4.69;
    const brand = "Apple";

    // calculating price after discount
    const discount = (price * discountPercentage) / 100;
    const priceAfterDiscount = price - discount;

    console.log("id : " + id);
    console.log("title : " + title);
    console.log("description: " + description);
    console.log("price : " + price + " euros");
    console.log("discountPercentage : " + discountPercentage);
    console.log("rating : " + rating);
    console.log("brand : " + brand);
    console.log("priceAfterDiscount : " + priceAfterDiscount + " euros");
    ```

  - Assignment operators: +=, -=, \*=, /=, %=
  - Unary operators: ++, --
  - Comparision / Relational operators: >, >=, <, <=, ==, !=, ===, !==

    - result is always boolean value

      ```js
      let num1 = 20;
      let num2 = 10;

      console.log(num1 > num2); // true
      console.log(num1 >= num2); // true
      console.log(num1 < num2); // false
      console.log(num1 <= num2); // false
      console.log(num1 === num2); // false
      console.log(num1 !== num2); // true
      ```

  - Logical operators: &&, ||, !

    - result is always boolean value

      ```js
      let num1 = 20;
      let num2 = 10;
      let num3 = 5;

      console.log(num1 > num2 && num1 > num3); // true
      console.log(num2 > num1 && num2 > num3); // false
      console.log(num3 > num1 && num3 > num2); // false
      console.log(num3 > num1 || num3 > num2); // false
      console.log(num2 > num1 || num2 > num3); // true
      ```

  - Ternary Operator: `condition ? expression1 : expression2;`
  - Bitwise operators: &, |, ^, ~, >>, <<
  - **Arithmetic Programs: Create normal calculator, algebra formula calculator, area calculator (triangle,circle), temperature calculator(fahrenheit-celsius), years to hours, swap 2 numbers.**
  - [**String Methods**](https://www.w3schools.com/js/js_string_methods.asp)

## 4. Prompt & Data Type conversion

- prompt() can help us to take user input. Though it is not recommended but for testing purpose we can use it instead of a form.
- Number(), toString(), pasreInt(), parseFloat(), parseDouble()
- Program 4: E-Commerce app [adding prompt(), & Number function]

  ```js
  // Program 4: E-Commerce app [adding prompt(), & Number function]
  const id = 101;
  const title = "iphone 12";
  const description = "brilliant phone with 4k camera";
  const price = 549;
  const discountPercentage = 8.5;
  const rating = 4.69;
  const brand = "Apple";

  // getting user input using prompt()
  const insuranceCost = Number(prompt("Insurance Cost? "));

  // calculating price after discount
  const discount = (price * discountPercentage) / 100;
  const priceAfterDiscount = price - discount;

  // calculating final price with insuranceCost
  const finalPriceWithInsurance = priceAfterDiscount + insuranceCost;

  console.log("id : " + id);
  console.log("title : " + title);
  console.log("description: " + description);
  console.log("price : " + price + " euros");
  console.log("discountPercentage : " + discountPercentage);
  console.log("rating : " + rating);
  console.log("brand : " + brand);
  console.log("priceAfterDiscount : " + priceAfterDiscount + " euros");
  console.log("finalPriceWithInsurance : " + finalPriceWithInsurance);
  ```

## 5. [Number, Math, Date Objects](https://www.w3schools.com/js/js_math.asp)

- Number Object -> x.toString(), x.toFixed(), x.toPrecision()
  - converting Strings to Numbers-> Number(), parseFloat(), parseInt()
- Math Object -> Math.PI, Math.max(), Math.min(), Math.sqrt(), Math.pow(),

  - Math.ceil() -> rounded up to its nearest integer. `Math.ceil(4.9)=5; Math.ceil(4.4)=5, Math.ceil(-4.4)=-4`

    ```js
        <!-- find century  -->
        function main() {
        var year = parseInt(readLine(), 10)
            //the output
            console.log(calcCent(year));
        }

        //complete the function
        function calcCent(year){
            return Math.ceil(year/100);

        }
    ```

  - Math.floor() -> rounded down to its nearest integer. `Math.floor(4.9)=4; Math.floor(4.4)=4, Math.floor(-4.4)=-5`
  - Math.round() -> rounded up to nearest integer. `Math.round(4.6)=5; Math.round(4.5)=5, Math.round(4.4)=4`
  - Math.trunc() -> returns the integer part. `Math.trunc(4.6)=4; Math.trunc(4.5)=4, Math.trunc(-4.4)=-4`
  - Math.random() -> returns a random number between 0 (inclusive), and 1 (exclusive)

  ```js
  console.log(Math.max(20, 30));
  console.log(Math.min(20, 30));
  console.log(Math.floor(3.4));
  console.log(Math.ceil(3.4));
  console.log(Math.round(3.4));
  console.log(Math.random());

  const randomNumber = Math.floor(Math.random() * 5) + 1;
  ```

- Date object

  ```js
  const date = new Date();
  console.log(date.getFullYear());
  console.log(date.getMonth());
  console.log(date.getDate());
  console.log(date.getDay());
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  console.log(date.getMilliseconds());

  // give year, month, day -> 2020, 5, 12
  // find the day name -> Friday
  function getWeekDay(year, month, day) {
    const names = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(year, month, day);
    //complete the function
    return names[date.getDay()];
  }

  console.log(date);
  console.log(date.toDateString()); // return a date object into readbale string
  console.log(date.toISOString()); // return a date object into iso standard
  console.log(date.toLocaleString()); // return a date object into iso standard
  ```

- Program 5: E-Commerce app [Math methods]

  ```js
  // Program 5: E-Commerce app [Math methods]
  const id = 101;
  const title = "iphone 12";
  const description = "brilliant phone with 4k camera";
  const price = 549;
  const discountPercentage = 8.5;
  const rating = 4.69;
  const brand = "Apple";

  // getting user input using prompt()
  const insuranceCost = Number(prompt("Insurance Cost? "));

  // calculating price after discount
  const discount = (price * discountPercentage) / 100;
  const priceAfterDiscount = price - discount;

  // calculating final price with insuranceCost
  const finalPriceWithInsurance = Math.round(
    priceAfterDiscount + insuranceCost
  );

  console.log("id : " + id);
  console.log("title : " + title);
  console.log("description: " + description);
  console.log("price : " + price + " euros");
  console.log("discountPercentage : " + discountPercentage);
  console.log("rating : " + rating);
  console.log("brand : " + brand);
  console.log("priceAfterDiscount : " + priceAfterDiscount + " euros");
  console.log("finalPriceWithInsurance : " + finalPriceWithInsurance);
  ```

## 6. Functions - traditional & arrow, string literals, js module, jsdoc

- Traditional function syntax and example

  - Function is a block of codes for a specific task.
  - It is beneficial for reusablity.
  - Separation of concerns.
  - **return keyword can be used only once inside a function.**
  - **value that a function received is called parameters and the value we pass when calling function is known as arguments**
  - Function related topics:

    - How to define a function?
    - How to call a function?
    - How to pass parameters to a function?
    - How to return a value from a function?

    ```js
    // function example 1
    // without function
    let greeting = "Hello ! Good morning";
    console.log(greeting);

    greeting = "Hello ! Good morning";
    console.log(greeting);

    greeting = "Hello ! Good morning";
    console.log(greeting);

    // with a simple function
    function sayGreeting() {
      const greeting = "Hello ! Good morning";
      console.log(greeting);
    }
    sayGreeting();
    sayGreeting();

    function sayGreeting(name) {
      const greeting = `Hello ${name}! Good morning`;
      console.log(greeting);
    }
    sayGreeting("Anis");
    sayGreeting("Alex");

    function sayGreeting(name) {
      return `Hello ${name}! Good morning`;
    }
    console.log(sayGreeting("Anis"));
    console.log(sayGreeting("Alex"));
    ```

    ```js
    // function example 2
    // without function
    let num1; // best practice: always slipt the declaration as I did in 3 lines
    let num2;
    let sum;

    num1 = 20;
    num2 = 30;
    sum = num1 + num2;
    console.log(sum);

    num1 = 10;
    num2 = 20;
    sum = num1 + num2;
    console.log(sum);

    num1 = 40;
    num2 = 20;
    sum = num1 + num2;
    console.log(sum);

    // with function
    function addNumbers(num1, num2) {
      const sum = num1 + num2;
      console.log(sum);
    }

    addNumbers(20, 30);
    addNumbers(10, 30);
    addNumbers(5, 15);
    ```

    ```js
    // Function example3

    // creating function without parameter
    function message() {
      console.log("Hello, I am a function without parameter");
    }

    // creating function with one parameter
    function welcomeMessage(name) {
      console.log(`Welcome ${name} to the Full-stack`);
    }

    // creating function with multiple parameters
    function welcomeMessage2(name, age) {
      console.log(
        `Welcome ${name} to the Full-stack. ${name} is ${age} years old`
      );
    }

    // returning from a function
    function welcomeMessage3(name, age) {
      return `Welcome ${name} to the Full-stack. ${name} is ${age} years old`;
    }

    // calling functions
    message();
    welcomeMessage("Alex");
    welcomeMessage2("Alex", 32);
    console.log(welcomeMessage3("Brown", 22));
    ```

  - Program 6: E-Commerce app [function & string literals]

    ```js
    // Program 6: E-commerce app  [function & string literals]
    const id = 101;
    const title = "iphone 12";
    const description = "brilliant phone with 4k camera";
    const price = 549;
    const discountPercentage = 8.5;
    const rating = 4.69;
    const brand = "Apple";
    const insuranceCost = 8;

    // discount function
    function discount(p, disPercentage) {
      return (p * disPercentage) / 100;
    }

    // roundPrice function
    function roundPrice(amount) {
      return Math.round(amount);
    }

    // priceAfterDiscount function
    function priceAfterDiscount(p, dp) {
      return p - discount(p, dp);
    }

    // finalPriceWithInsurance function
    function finalPriceWithInsurance(p, dp, ic) {
      return roundPrice(priceAfterDiscount(p, dp) + ic);
    }

    // printing product details
    function printProductDetails(
      pId,
      pTitle,
      pDescription,
      pPrice,
      pRating,
      pBrand,
      PDiscountPercentage,
      pInsurance
    ) {
      console.log(`id : ${pId}`);
      console.log(`title : ${pTitle}`);
      console.log(`description: ${pDescription}`);
      console.log(`price : ${pPrice} euros`);
      console.log(`rating : ${pRating}`);
      console.log(`brand : ${pBrand}`);
      console.log(
        `finalPriceWithInsurance : ${finalPriceWithInsurance(
          pPrice,
          PDiscountPercentage,
          pInsurance
        )} euros`
      );
    }

    printProductDetails(
      id,
      title,
      description,
      price,
      rating,
      brand,
      discountPercentage,
      insuranceCost
    );
    ```

- ### Function Programs

  - create a simple function for calculating square
  - create a simple function for calculating double, triple
  - create functions for addition, subtraction
  - create a function for checking a number is even or odd
  - create a function for checking largest number between 2/3 numbers
  - put all if-else related programs inside functions

- Arrow function

  - Arrow function syntax and example

    ```js
    // Arrow function vs Traditional function

    // demo1 - must use parenthesis for no parameters or multiple parmaters, but for one parameter its optional
    function display1() {
      console.log("I am display 1");
    }
    const display2 = () => {
      console.log("I am display 2");
    };
    display1();
    display2();

    // demo2 - no need to use curly braces if returning or dealing with single statement
    function display3() {
      console.log("I am display 3");
    }
    const display4 = () => console.log("I am display 4");
    display3();
    display4();

    // returning value in arrow function - no need to use return keyword with single statement
    function display5() {
      return "I am display 5";
    }
    const display6 = () => "I am display 6";
    console.log(display5());
    console.log(display6());

    // parameters in arrow function
    function add1(x, y) {
      return x + y;
    }
    const add2 = (x, y) => x + y;
    console.log(add1(10, 20));
    console.log(add2(20, 30));
    ```

  - Program 7 : E-Commerce app [arrow-function]

    ```js
    // Program 7: E-Commerce app [arrow-function]
    const id = 101;
    const title = "iphone 12";
    const description = "brilliant phone with 4k camera";
    const price = 549;
    const discountPercentage = 8.5;
    const rating = 4.69;
    const brand = "Apple";

    const insuranceCost = 8;

    // discount function
    const discount = (p, disPercentage) => (p * disPercentage) / 100;

    // roundPrice function
    const roundPrice = (p) => Math.round(p);

    //priceAfterDiscount
    const priceAfterDiscount = (p, dp) => p - discount(p, dp);

    // finalPriceWithInsurance
    const finalPriceWithInsurance = (p, dp, ic) =>
      roundPrice(priceAfterDiscount(p, dp) + ic);

    // printing product details
    const printProductDetails = (
      pId,
      pTitle,
      pDescription,
      pPrice,
      pRating,
      pBrand,
      PDiscountPercentage,
      pInsurance
    ) => {
      console.log(`id : ${pId}`);
      console.log(`title : ${pTitle}`);
      console.log(`description: ${pDescription}`);
      console.log(`price : ${pPrice} euros`);
      console.log(`rating : ${pRating}`);
      console.log(`brand : ${pBrand}`);
      console.log(
        `finalPriceWithInsurance : ${finalPriceWithInsurance(
          pPrice,
          PDiscountPercentage,
          pInsurance
        )} euros`
      );
    };

    printProductDetails(
      id,
      title,
      description,
      price,
      rating,
      brand,
      discountPercentage,
      insuranceCost
    );
    ```

- javascript module

  - JavaScript modules allow you to break up your code into separate files.

  - This makes it easier to maintain a code-base.

  - Modules are imported from external files with the import statement.

  - Modules also rely on type="module" in the `<script>` tag.

  - export

    - Modules with functions or variables can be stored in any external file.
    - There are two types of exports: Named Exports and Default Exports.
    - example of Named exports

      ```js
      // person.js
      // inline individually exports
      export const name = "Jesse";
      export const age = 40;

      // all at once exports
      const name = "Jesse";
      const age = 40;
      export { name, age };
      ```

    - example of default exports

      ```js
      // 1 export in a file
      const message = () => {
        const name = "Jesse";
        const age = 40;
        return name + " is " + age + "years old.";
      };

      export default message;
      ```

  - import

    - You can import modules into a file in two ways, based on if they are named exports or default exports.
    - Named exports are constructed using curly braces. Default exports are not.
    - example of Named Imports

      ```js
      import { name, age } from "./person.js";
      ```

    - example of default imports

      ```js
      import message from "./message.js";
      ```

- [jsdoc](https://github.com/anisul-Islam/jsdoc-documentation)

  - Program 8: E-Commerce app [adding jsdoc]

    ```js
    // Program 8: E-Commerce app [adding jsdoc]
    /**
     * product id
     * @type {number}
     */
    const id = 101;
    const title = "iphone 12";
    const description = "brilliant phone with 4k camera";
    const price = 549;
    const discountPercentage = 8.5;
    const rating = 4.69;
    const brand = "Apple";

    const insuranceCost = 8;

    /**
     * calculate the discount amount of a product
     * @param {number} p The product price
     * @param {number} disPercentage The discount percentage of the product
     * @returns the discount amount
     */
    const discount = (p, disPercentage) => (p * disPercentage) / 100;

    /**
     * calculate the round value of any amount
     * @param {number} p The product price
     * @returns the rounded value
     */
    const roundPrice = (p) => Math.round(p);

    /**
     * calculate the priceAfterDiscount
     * @param {number} p The product price
     * @param {number} dp discount percentage
     * @returns the price after discount
     */
    const priceAfterDiscount = (p, dp) => p - discount(p, dp);

    /**
     * calculate the product finalPriceWithInsurance
     * @param {number} p the price of product;
     * @param {number} dp the discount percentage of prodcut;
     * @param {number} ic the product insurance cost
     * @returns the final price including insurance cost
     */
    const finalPriceWithInsurance = (p, dp, ic) =>
      roundPrice(priceAfterDiscount(p, dp) + ic);

    /**
     * print product details
     * @param {number} pId the product id
     * @param {string} pTitle the product title
     * @param {string} pDescription the product description
     * @param {number} pPrice the product price
     * @param {number} pRating the product rating
     * @param {string} pBrand the product brand
     * @param {number} PDiscountPercentage the discount percentage of the product
     * @param {number} pInsurance the insurance cost of the product
     */
    const printProductDetails = (
      pId,
      pTitle,
      pDescription,
      pPrice,
      pRating,
      pBrand,
      PDiscountPercentage,
      pInsurance
    ) => {
      console.log(`id : ${pId}`);
      console.log(`title : ${pTitle}`);
      console.log(`description: ${pDescription}`);
      console.log(`price : ${pPrice} euros`);
      console.log(`rating : ${pRating}`);
      console.log(`brand : ${pBrand}`);
      console.log(
        `finalPriceWithInsurance : ${finalPriceWithInsurance(
          pPrice,
          PDiscountPercentage,
          pInsurance
        )} euros`
      );
    };

    printProductDetails(
      id,
      title,
      description,
      price,
      rating,
      brand,
      discountPercentage,
      insuranceCost
    );
    ```

## 8. Control statement

- Conditional control statement: if, else if, else, switch

  - if, else if, else syntax

    ```js
    // if syntax
    // if the condition is true then if body will work
    if (condition) {
      // the body of if
    }

    // if, else syntax
    // if the condition is true then if body will work or else will work
    if (condition) {
      // the body of if
    } else {
      // the body of else
    }

    // if, else if, else syntax
    if (condition) {
      // the body of if
    } else if (condition) {
      // the body of else if
    } else if (condition) {
      // the body of else if
    } else {
      // the body of else
    }
    ```

    - if, else if, else related programs

      - positive / negative / zero program
      - Even / odd program
      - Vowel / consonant program
      - find large / small number program
      - digit spelling program
      - [leap year program](https://www.tutorialspoint.com/learn_c_by_examples/leap_year_program_in_c.htm)

        ```js
        // a program that will find a large number between 2 numbers
        var num1 = parseInt(prompt("Enter first numebr : "));
        var num2 = parseInt(prompt("Enter second numebr : "));

        // first method - using only if
        if (num1 > num2) {
          console.log("Large Number is : " + num1);
        }
        if (num1 < num2) {
          console.log("Large Number is : " + num2);
        }
        if (num1 == num2) {
          console.log("Equal numbers");
        }

        // second method - more efficient than first method
        if (num1 > num2) {
          console.log("Large Number is : " + num1);
        } else if (num1 < num2) {
          console.log("Large Number is : " + num2);
        } else if (num1 == num2) {
          console.log("Equal numbers");
        }

        // third method - more efficient than first and second method
        if (num1 > num2) {
          console.log("Large Number is : " + num1);
        } else if (num1 < num2) {
          console.log("Large Number is : " + num2);
        } else {
          console.log("Equal numbers");
        }

        // A program that will find a letter is vowel or consonant
        var letter = prompt("Enter a letter : ");

        // convert any uppercase input into lower cause we set only lowercase letter in condition
        letter = letter.toLowerCase();

        // Now check the condition
        if (
          letter == "a" ||
          letter == "e" ||
          letter == "i" ||
          letter == "o" ||
          letter == "u"
        ) {
          console.log("Vowel");
        } else {
          console.log("Consonant");
        }
        ```

      - Program 9 : E-commerce app [conditional control statement if/else]

        ```js
        // Program 9: E-commerce app [conditional control statement if/else]
        /**
         * product id
         * @type {number}
         */
        const id = 101;
        const title = "iphone 12";
        const description = "brilliant phone with 4k camera";
        const price = 549;
        const discountPercentage = 8.5;
        const rating = 4.69;
        const brand = "Apple";

        const insuranceCost = 8;

        /**
         * check login status of the user
         * @returns true/false based on login status
         */
        const checkLoginStatus = () => {
          const loginStatus = true;
          return loginStatus;
        };

        /**
         * calculate the discount amount of a product
         * @param {number} p The product price
         * @param {number} disPercentage The discount percentage of the product
         * @returns the discount amount
         */
        const discount = (p, disPercentage) => (p * disPercentage) / 100;

        /**
         * calculate the round value of any amount
         * @param {number} p The product price
         * @returns the rounded value
         */
        const roundPrice = (p) => Math.round(p);

        /**
         * calculate the priceAfterDiscount
         * @param {number} p The product price
         * @param {number} dp discount percentage
         * @returns the price after discount
         */
        const priceAfterDiscount = (p, dp) => p - discount(p, dp);

        /**
         * calculate the product finalPriceWithInsurance
         * @param {number} p the price of product;
         * @param {number} dp the discount percentage of prodcut;
         * @param {number} ic the product insurance cost
         * @returns the final price including insurance cost
         */
        const finalPriceWithInsurance = (p, dp, ic) =>
          roundPrice(priceAfterDiscount(p, dp) + ic);

        /**
         * print product details
         * @param {number} pId the product id
         * @param {string} pTitle the product title
         * @param {string} pDescription the product description
         * @param {number} pPrice the product price
         * @param {number} pRating the product rating
         * @param {string} pBrand the product brand
         * @param {number} PDiscountPercentage the discount percentage of the product
         * @param {number} pInsurance the insurance cost of the product
         */
        const printProductDetails = (
          pId,
          pTitle,
          pDescription,
          pPrice,
          pRating,
          pBrand,
          PDiscountPercentage,
          pInsurance
        ) => {
          console.log(`id : ${pId}`);
          console.log(`title : ${pTitle}`);
          console.log(`description: ${pDescription}`);
          console.log(`price : ${pPrice} euros`);
          console.log(`rating : ${pRating}`);
          console.log(`brand : ${pBrand}`);
          console.log(
            `finalPriceWithInsurance : ${finalPriceWithInsurance(
              pPrice,
              PDiscountPercentage,
              pInsurance
            )} euros`
          );
        };

        // user authentication check
        if (checkLoginStatus()) {
          console.log("user is logged in");
          printProductDetails(
            id,
            title,
            description,
            price,
            rating,
            brand,
            discountPercentage,
            insuranceCost
          );
        } else {
          console.log("Please login first");
        }
        ```

  - switch

    - An alternative for if, else.
    - 4 keywords: switch, case, break, default

    ```js
    // A program to understand switch -> digit spelling program
    // 0 -> Zero
    // 1 -> One
    // 2 -> Two
    // ...
    // ...
    // 9 -> Nine
    // for any number program will display "not a digit"

    var digit = parseInt(prompt("Enter a digit : "));
    switch (digit) {
      case 0:
        console.log("Zero");
        break;

      case 1:
        console.log("One");
        break;

      case 2:
        console.log("Two");
        break;

      case 3:
        console.log("Three");
        break;

      case 4:
        console.log("Four");
        break;

      case 5:
        console.log("Five");
        break;

      case 6:
        console.log("Six");
        break;

      case 7:
        console.log("Seven");
        break;

      case 8:
        console.log("Eight");
        break;

      case 9:
        console.log("Nine");
        break;

      default:
        console.log("Not a digit");
    }
    ```

    - Program 8 :

- Loop control statement: for, while, do while loop

  - for loop

    ```js
    //A program to demonstrate for loop
    for (var i = 1; i <= 10; i++) {
      console.log("Bangladesh");
    }

    console.log("End of for loop");

    // sum of numbers 1+2+..+100
    // var sum = 0;
    // for (var x = 1; x <= 100; x++){
    //     sum = sum + x;
    // }
    // console.log(sum);
    ```

  - while loop

    ```js
    //A program to demonstrate while loop
    var i = 1;
    while (i <= 10) {
      console.log("Bangladesh");
      i++;
    }

    console.log("End of for loop");

    // sum of numbers 1+2+..+100
    // var sum = 0;
    // var x = 1;
    // while ( x <= 100){
    //     sum = sum + x;
    //     x++;
    // }
    // console.log(sum);
    ```

  - do while loop

    ```js
    // A program to demonstrate do while loop
    var i = 1;
    do {
      console.log("Bangladesh");
      i++;
    } while (i <= 10);

    console.log("End of for loop");

    // sum of numbers 1+2+..+100
    // var sum = 0;
    // var x = 1;
    // do{
    //     sum = sum + x;
    //     x++;
    // }while ( x <= 100)
    // console.log(sum);
    ```

  - break and continue statement

    ```js
    // break and continue keyword program

    // The break statement "jumps out" of a loop or switch if the condition is matched.
    for (var i = 1; i <= 100; i++) {
      if (i == 20) break;
      console.log(i);
    }

    // The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
    for (var i = 1; i <= 100; i++) {
      if (i == 20) continue;
      console.log(i);
    }
    ```

## 9. Object & Array

- Object

  - **object is a core concept in JS**
  - **create a contact manager / student manager app**
  - **use for..in for looping an object**
  - object is one type of variable that can store differnt types of variables
  - object syntax and example

    ```js
    const student = {
      name: "Anisul Islam", // property
      displayInfo: function () {
        // method related to object
        return `Hello! My name is ${this.name}`;
      },
    };

    console.log(student.name);
    console.log(student.displayInfo());
    ```

    ```js
    // object program example
    // what is Object?
    // How to create an object?
    // How to access object properties?
    // Constructor, this keyword
    // function inside constructor

    // declaring variables and using them
    const name = "Anisul Islam";
    const age = 27;
    const cgpa = 3.92;
    const lang = ["Bengali", "English"];

    // declaring objects -> object is one type of variable that can store differnt types of variables
    const student1 = {
      // property : value
      name: "Anisul Islam",
      age: 27,
      cgpa: 3.92,
      lang: ["Bengali", "English"],
    };

    const student2 = {
      // property : value
      name: "Rokib",
      age: 28,
      cgpa: 2.92,
      lang: ["Hindi", "Bengali"],
    };

    const student3 = {
      // property : value
      name: "Sweety",
      age: 25,
      cgpa: 4.92,
      lang: ["Bengali", "Urdu"],
    };
    // printing object property's value
    // object properties can be accessed in two ways: objectName.propertyName or objectName["propertyName"]
    console.log(student1.name);
    console.log(student1[name]);
    console.log(student1);

    console.log("using constructor");
    // adding constructor and simplifying the task

    function Student(name, age, cgpa, lang) {
      this.name = name;
      this.age = age;
      this.cgpa = cgpa;
      this.lang = lang;

      // adding function inside the constructor
      /*
      object properties that holds a function is called Method. Use dot operator for accessing. we can declare the function outside then use here
      */
      this.display = function () {
        console.log(this.name);
      };
      <!-- this.display = function d() {
        console.log(this.name);
      }; -->

      this.display = d;
    }

      function d() {
        console.log(this.name);
      };

    const s1 = new Student("Anisul Islam", 27, 3.92, ["Bengali", "English"]);
    const s2 = new Student("Rabeya Begum", 23, 4.92, ["Bengali", "Urdu"]);
    const s3 = new Student("Milon", 29, 4.68, ["Bengali", "Hindi"]);

    console.log(s1);
    console.log(s2);
    console.log(s3);
    s1.display();
    ```

    ```js
    // contact manager app
    function contact(name, number) {
      this.name = name;
      this.number = number;

      this.print = function () {
        console.log(`${this.name}: ${this.number}`);
      };
    }

    var a = new contact("David", 12345);
    var b = new contact("Amy", 987654321);
    a.print();
    b.print();
    ```

  - Program 10 : E-commerce app [object]

    ```js
    // Program 10: E-commerce app [object]

    const product = {
      id: 101,
      title: "iphone 12",
      description: "brilliant phone with 4k camera",
      price: 549,
      discountPercentage: 8.5,
      rating: 4.69,
      brand: "Apple",
      insuranceCost: 8,
    };

    /**
     * check login status of the user
     * @returns true/false based on login status
     */
    const checkLoginStatus = () => {
      const loginStatus = true;
      return loginStatus;
    };

    /**
     * calculate the discount amount of a product
     * @param {number} p The product price
     * @param {number} disPercentage The discount percentage of the product
     * @returns the discount amount
     */
    const discount = (p, disPercentage) => (p * disPercentage) / 100;

    /**
     * calculate the round value of any amount
     * @param {number} p The product price
     * @returns the rounded value
     */
    const roundPrice = (p) => Math.round(p);

    /**
     * calculate the priceAfterDiscount
     * @param {number} p The product price
     * @param {number} dp discount percentage
     * @returns the price after discount
     */
    const priceAfterDiscount = (p, dp) => p - discount(p, dp);

    /**
     * calculate the product finalPriceWithInsurance
     * @param {number} p the price of product;
     * @param {number} dp the discount percentage of prodcut;
     * @param {number} ic the product insurance cost
     * @returns the final price including insurance cost
     */
    const finalPriceWithInsurance = (p, dp, ic) =>
      roundPrice(priceAfterDiscount(p, dp) + ic);

    /**
     * print product details
     * @param {number} pId the product id
     * @param {string} pTitle the product title
     * @param {string} pDescription the product description
     * @param {number} pPrice the product price
     * @param {number} pRating the product rating
     * @param {string} pBrand the product brand
     * @param {number} PDiscountPercentage the discount percentage of the product
     * @param {number} pInsurance the insurance cost of the product
     */
    const printProductDetails = (
      pId,
      pTitle,
      pDescription,
      pPrice,
      pRating,
      pBrand,
      PDiscountPercentage,
      pInsurance
    ) => {
      console.log(`id : ${pId}`);
      console.log(`title : ${pTitle}`);
      console.log(`description: ${pDescription}`);
      console.log(`price : ${pPrice} euros`);
      console.log(`rating : ${pRating}`);
      console.log(`brand : ${pBrand}`);
      console.log(
        `finalPriceWithInsurance : ${finalPriceWithInsurance(
          pPrice,
          PDiscountPercentage,
          pInsurance
        )} euros`
      );
    };

    // user authentication check
    if (checkLoginStatus()) {
      printProductDetails(
        product.id,
        product.title,
        product.description,
        product.price,
        product.rating,
        product.brand,
        product.discountPercentage,
        product.insuranceCost
      );
    } else {
      console.log("Please login first");
    }
    ```

- Array

  - [Array related methods](https://javascript.info/array-methods)
  - Array is a collection of similar data type mostly.
  - Array VS Object -> arrays use numbered indexes. but, objects use named indexes.

  - Array syntax & example

    ```js
    // Array example 1
    // creating an array with 20 variables
    var names = new Array(20);

    //array index always start with 0
    names[0] = "Anisul";
    names[1] = "Sonali";

    //printing an array elements
    console.log(names[1]);

    // creating an array with values
    var students = ["Anisul", "Sonali", "Priya", "Numan"];
    console.log("students = " + students);
    console.log("studnet at 2 index : " + students[2]);

    //finding the length of an array
    console.log("Length of student array : " + students.length);

    //pusing an element in array
    students.push("musa");
    console.log("after pushing students = " + students);

    //pusing an element in array
    students.pop("musa");
    console.log("after poping students = " + students);

    // concatenation of arrays
    var num1 = [10, 20];
    var num2 = [30, 40, 50, 60];
    var num = num1.concat(num2);
    console.log("After concatenation : " + num);

    // Array example 2
    let demoArray = [
      "Anisul Islam",
      3.92,
      null,
      true,
      undefined,
      { name: "anis" },
    ];
    console.log(demoArray);

    //length of an array
    console.log(demoArray.length);

    // accessing array element
    console.log(demoArray[2]);

    // check an item exist or not
    console.log(demoArray.indexOf(3.92));

    // adding single or multiple items to the starting of an array
    demoArray.unshift("England");
    // demoArray.unshift("England", "Pakistan");
    console.log(demoArray);

    // adding items to the ending of an array
    demoArray.push("Finland");
    // demoArray.push("Finland", "Canada");
    console.log(demoArray);

    // removing single or multiple items to the starting of an array
    demoArray.shift("England");
    // demoArray.shift("England", "Pakistan");
    console.log(demoArray);

    // removing items to the ending of an array
    demoArray.pop("Finland");
    // demoArray.pop("Finland", "Canada");
    console.log(demoArray);

    // remove items using splice
    demoArray.splice(1, 2);
    console.log(demoArray);

    // Add items using splice - startIndex, NumberOfItemsToDelete, item / items)
    demoArray.splice(0, 1, 2);
    console.log(demoArray);

    // copy an array using spread operator
    let array1 = [4, 5, 6];
    let array2 = [1, 2, 3, ...array1];
    console.log(array2);

    let matrix = [
      [1, 2],
      [3, 4],
    ];

    console.log(matrix[0][1]);
    ```

  - Program 11: E-commerce app [Array & loop]

    ```js
    // Program 11: E-commerce app [Array & loop]
    // data collected from API - https://dummyjson.com/products
    const products = [
      {
        id: 101,
        title: "iphone 9",
        description: "brilliant phone with 4k camera",
        price: 549,
        discountPercentage: 8.5,
        rating: 4.69,
        brand: "Apple",
        insuranceCost: 8,
      },
      {
        id: 102,
        title: "iphone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        brand: "Apple",
        insuranceCost: 8,
      },
      {
        id: 103,
        title: "Samsung Universe 9",
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        brand: "Samsung",
        insuranceCost: 8,
      },
      {
        id: 104,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        brand: "Oppo",
        insuranceCost: 8,
      },
    ];

    /**
     * check login status of the user
     * @returns true/false based on login status
     */
    const checkLoginStatus = () => {
      const loginStatus = true;
      return loginStatus;
    };

    /**
     * calculate the discount amount of a product
     * @param {number} p The product price
     * @param {number} disPercentage The discount percentage of the product
     * @returns the discount amount
     */
    const discount = (p, disPercentage) => (p * disPercentage) / 100;

    /**
     * calculate the round value of any amount
     * @param {number} p The product price
     * @returns the rounded value
     */
    const roundPrice = (p) => Math.round(p);

    /**
     * calculate the priceAfterDiscount
     * @param {number} p The product price
     * @param {number} dp discount percentage
     * @returns the price after discount
     */
    const priceAfterDiscount = (p, dp) => p - discount(p, dp);

    /**
     * calculate the product finalPriceWithInsurance
     * @param {number} p the price of product;
     * @param {number} dp the discount percentage of prodcut;
     * @param {number} ic the product insurance cost
     * @returns the final price including insurance cost
     */
    const finalPriceWithInsurance = (p, dp, ic) =>
      roundPrice(priceAfterDiscount(p, dp) + ic);

    /**
     * print product details
     * @param {number} pId the product id
     * @param {string} pTitle the product title
     * @param {string} pDescription the product description
     * @param {number} pPrice the product price
     * @param {number} pRating the product rating
     * @param {string} pBrand the product brand
     * @param {number} PDiscountPercentage the discount percentage of the product
     * @param {number} pInsurance the insurance cost of the product
     */
    const printProductDetails = (
      pId,
      pTitle,
      pDescription,
      pPrice,
      pRating,
      pBrand,
      PDiscountPercentage,
      pInsurance
    ) => {
      console.log(`id : ${pId}`);
      console.log(`title : ${pTitle}`);
      console.log(`description: ${pDescription}`);
      console.log(`price : ${pPrice} euros`);
      console.log(`rating : ${pRating}`);
      console.log(`brand : ${pBrand}`);
      console.log(
        `finalPriceWithInsurance : ${finalPriceWithInsurance(
          pPrice,
          PDiscountPercentage,
          pInsurance
        )} euros`
      );
    };

    // user authentication check
    if (checkLoginStatus()) {
      console.log("login successful");
      for (let index = 0; index < products.length; index++) {
        console.log(`Product ${index + 1}: `);

        printProductDetails(
          products[index].id,
          products[index].title,
          products[index].description,
          products[index].price,
          products[index].rating,
          products[index].brand,
          products[index].discountPercentage,
          products[index].insuranceCost
        );

        console.log("------------------------------------------");
      }
    } else {
      console.log("Please login first");
    }
    ```

    - Array Object related properties & methods

      - length (works with object)
      - array1.concat(array2) -> returns a new array
      - array.splice() -> add items to an array -> fruits.splice(2, 0, "Lemon", "Kiwi");
        - The first parameter (2) defines the position where new elements should be added (spliced in).The second parameter (0) defines how many elements should be removed. The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
      - array.slice(starting, ending or only starting) -> slices out from an array
      - array.sort() -> [default sort string](https://www.w3schools.com/js/js_array_sort.asp)

        ```js
        const points = [40, 100, 1, 5, 25, 10];
        points.sort(function (a, b) {
          return a - b; // for reverse b-a
        });
        ```

        - The compare function should return a negative, zero, or positive value, depending on the arguments:If the result is negative, a is sorted before b. If the result is positive, b is sorted before a. If the result is 0, no changes are done with the sort order of the two values.
        - find lowest value: `points.sort(function(a, b){return b - a}); points[points.length-1]`
        - sorting object arrays

        ```js
        const cars = [
          { type: "Volvo", year: 2016 },
          { type: "Saab", year: 2001 },
          { type: "BMW", year: 2010 },
        ];
        cars.sort(function (a, b) {
          return a.year - b.year;
        });

        // comparing string inside an object is complex
        cars.sort(function (a, b) {
          let x = a.type.toLowerCase();
          let y = b.type.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        ```

## 10. Higher Order Array function, spread operator & destructure

- ES5 Feature
- [map()](https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/) higher order function

  - when we use loop we need to create an array but map returns an array
  - map() does not change the original array.
  - map() creates a new array from calling a function for every array element.
  - map() calls a function once for each element in an array.
  - map() does not execute the function for empty elements.

  - syntax and example

    ```js
    const numbers = [22, 31, 4, 5, 35, 26, 78];
    const squareNumbers = numbers.map(function (x) {
      return x * x;
    });
    console.log(squareNumbers);
    ```

  - Program 12 : E-commerce app [Higher Order Function: map()]

    ```js
    // Program 12: E-commerce app [Higher Order Function: map()]
    // data collected from API - https://dummyjson.com/products
    const products = [
      {
        id: 101,
        title: "iphone 9",
        description: "brilliant phone with 4k camera",
        price: 549,
        discountPercentage: 8.5,
        rating: 4.69,
        brand: "Apple",
        insuranceCost: 8,
      },
      {
        id: 102,
        title: "iphone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        brand: "Apple",
        insuranceCost: 8,
      },
      {
        id: 103,
        title: "Samsung Universe 9",
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        brand: "Samsung",
        insuranceCost: 8,
      },
      {
        id: 104,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        brand: "Oppo",
        insuranceCost: 8,
      },
    ];

    /**
     * check login status of the user
     * @returns true/false based on login status
     */
    const checkLoginStatus = () => {
      const loginStatus = true;
      return loginStatus;
    };

    /**
     * calculate the discount amount of a product
     * @param {number} p The product price
     * @param {number} disPercentage The discount percentage of the product
     * @returns the discount amount
     */
    const discount = (p, disPercentage) => (p * disPercentage) / 100;

    /**
     * calculate the round value of any amount
     * @param {number} p The product price
     * @returns the rounded value
     */
    const roundPrice = (p) => Math.round(p);

    /**
     * calculate the priceAfterDiscount
     * @param {number} p The product price
     * @param {number} dp discount percentage
     * @returns the price after discount
     */
    const priceAfterDiscount = (p, dp) => p - discount(p, dp);

    /**
     * calculate the product finalPriceWithInsurance
     * @param {number} p the price of product;
     * @param {number} dp the discount percentage of prodcut;
     * @param {number} ic the product insurance cost
     * @returns the final price including insurance cost
     */
    const finalPriceWithInsurance = (p, dp, ic) =>
      roundPrice(priceAfterDiscount(p, dp) + ic);

    /**
     * print product details
     * @param {object} product the product object
     */
    const printProductDetails = (product) => {
      console.log(`id : ${product.id}`);
      console.log(`title : ${product.title}`);
      console.log(`description: ${product.description}`);
      console.log(`price : ${product.price} euros`);
      console.log(`rating : ${product.rating}`);
      console.log(`brand : ${product.brand}`);
      console.log(
        `finalPriceWithInsurance : ${finalPriceWithInsurance(
          product.price,
          product.discountPercentage,
          product.insuranceCost
        )} euros`
      );
    };

    // user authentication check
    if (checkLoginStatus()) {
      console.log("login successful");
      products.map((product, index) => {
        // print all the products
        // console.log(product);
        console.log(`Product ${index + 1}: `);
        printProductDetails(product);
        console.log("------------------------------------------");
      });
    } else {
      console.log("Please login first");
    }
    ```

- destructure

  - destructure syntax and example

    ```js
    // destructuing assignment

    //array destructuring
    let numbers = [10, 20, 30, 40, 50];
    let [num1, num2, num3, num4, num5] = numbers;
    console.log(numbers[0]);
    console.log(num1);
    console.log(num2);

    let [x, y, ...z] = numbers;
    console.log(z);

    //swapping variables
    let m = 10,
      n = 5;
    [m, n] = [n, m];
    console.log(m);
    console.log(n);

    //object destructuring
    // const student1 = {
    //     id : 101,
    //     fullName : 'Anisul Islam',
    //     gpa : 3.92
    // }

    // //we can also set default values of an object that does not exist
    // let {id, fullName, gpa, country = 'Bangladesh'} = student1

    // console.log(fullName)
    // console.log(country)

    //nested object destructuring
    const student2 = {
      id: 101,
      fullName: "Anisul Islam",
      gpa: 3.92,
      languages: {
        native: "Bangla",
        beginner: "Finnish",
      },
      visited: ["bangladesh", "pakistan"],
    };
    let { fullName, gpa, languages, visited } = student2;
    console.log(fullName);
    console.log(languages.native);
    console.log(visited[0]);

    // destructuring function arguments
    // const studentDetails = (studentInfo) => {
    //     console.log(`${studentInfo.firstName} ${studentInfo.roll} ${studentInfo.dob}`)
    // }

    const studentDetails = ({ firstName, roll, dob }) => {
      console.log(`${firstName} ${roll} ${dob}`);
    };

    const studentInfo = {
      dob: "12/03/90",
      roll: 101,
      firstName: "Anisul",
    };

    studentDetails(studentInfo);
    ```

    - Program 13: E-commerce app [destructuring]

    ```js
    // Program 13: E-commerce app [destructuring]
    // data collected from API - https://dummyjson.com/products
    const products = [
      {
        id: 101,
        title: "iphone 9",
        description: "brilliant phone with 4k camera",
        price: 549,
        discountPercentage: 8.5,
        rating: 4.69,
        brand: "Apple",
        insuranceCost: 8,
      },
      {
        id: 102,
        title: "iphone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        brand: "Apple",
        insuranceCost: 8,
      },
      {
        id: 103,
        title: "Samsung Universe 9",
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        brand: "Samsung",
        insuranceCost: 8,
      },
      {
        id: 104,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        brand: "Oppo",
        insuranceCost: 8,
      },
    ];

    /**
     * check login status of the user
     * @returns true/false based on login status
     */
    const checkLoginStatus = () => {
      const loginStatus = true;
      return loginStatus;
    };

    /**
     * calculate the discount amount of a product
     * @param {number} p The product price
     * @param {number} disPercentage The discount percentage of the product
     * @returns the discount amount
     */
    const discount = (p, disPercentage) => (p * disPercentage) / 100;

    /**
     * calculate the round value of any amount
     * @param {number} p The product price
     * @returns the rounded value
     */
    const roundPrice = (p) => Math.round(p);

    /**
     * calculate the priceAfterDiscount
     * @param {number} p The product price
     * @param {number} dp discount percentage
     * @returns the price after discount
     */
    const priceAfterDiscount = (p, dp) => p - discount(p, dp);

    /**
     * calculate the product finalPriceWithInsurance
     * @param {number} p the price of product;
     * @param {number} dp the discount percentage of prodcut;
     * @param {number} ic the product insurance cost
     * @returns the final price including insurance cost
     */
    const finalPriceWithInsurance = (p, dp, ic) =>
      roundPrice(priceAfterDiscount(p, dp) + ic);

    /**
     * print product details
     * @param {object} product the product object
     */
    const printProductDetails = (product) => {
      // destructuring here
      const {
        id,
        title,
        description,
        price,
        rating,
        brand,
        discountPercentage,
        insuranceCost,
      } = product;
      console.log(`id : ${id}`);
      console.log(`title : ${title}`);
      console.log(`description: ${description}`);
      console.log(`price : ${price}`);
      console.log(`rating : ${rating}`);
      console.log(`brand : ${brand}`);
      console.log(
        `finalPriceWithInsurance : ${finalPriceWithInsurance(
          price,
          discountPercentage,
          insuranceCost
        )}`
      );
    };

    // user authentication check
    if (checkLoginStatus()) {
      console.log("login successful");
      products.map((product, index) => {
        // print all the products
        // console.log(product);
        console.log(`Product ${index + 1}: `);
        printProductDetails(product);
        console.log("------------------------------------------");
      });
    } else {
      console.log("Please login first");
    }
    ```

- filter() higher order function

  - filter() does not change the original array.
  - filter() creates a new array filled with elements that pass a test provided by a function.
  - filter() calls a function once for each element in an array.
  - filter() does not execute the function for empty elements.
  - filter() syntax and example

    ```js
    var numbers = [22, 31, 4, 5, 35, 26, 78];
    var newNumbers = numbers.filter(function (x) {
      return x > 10;
    });
    console.log(newNumbers);
    ```

  - filter() syntax and example

    ```js
    // Program 14: E-commerce app [filter() higher order function]
    // data collected from API - https://dummyjson.com/products
    const products = [
      {
        id: 101,
        title: "iphone 9",
        description: "brilliant phone with 4k camera",
        price: 549,
        discountPercentage: 8.5,
        rating: 4.69,
        brand: "Apple",
        insuranceCost: 8,
      },
      {
        id: 102,
        title: "iphone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        brand: "Apple",
        insuranceCost: 8,
      },
      {
        id: 103,
        title: "Samsung Universe 9",
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        brand: "Samsung",
        insuranceCost: 8,
      },
      {
        id: 104,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        brand: "Oppo",
        insuranceCost: 8,
      },
    ];

    /**
     * check login status of the user
     * @returns true/false based on login status
     */
    const checkLoginStatus = () => {
      const loginStatus = true;
      return loginStatus;
    };

    /**
     * calculate the discount amount of a product
     * @param {number} p The product price
     * @param {number} disPercentage The discount percentage of the product
     * @returns the discount amount
     */
    const discount = (p, disPercentage) => (p * disPercentage) / 100;

    /**
     * calculate the round value of any amount
     * @param {number} p The product price
     * @returns the rounded value
     */
    const roundPrice = (p) => Math.round(p);

    /**
     * calculate the priceAfterDiscount
     * @param {number} p The product price
     * @param {number} dp discount percentage
     * @returns the price after discount
     */
    const priceAfterDiscount = (p, dp) => p - discount(p, dp);

    /**
     * calculate the product finalPriceWithInsurance
     * @param {number} p the price of product;
     * @param {number} dp the discount percentage of prodcut;
     * @param {number} ic the product insurance cost
     * @returns the final price including insurance cost
     */
    const finalPriceWithInsurance = (p, dp, ic) =>
      roundPrice(priceAfterDiscount(p, dp) + ic);

    /**
     * print product details
     * @param {object} product the product object
     */
    const printProductDetails = (product) => {
      // destructuring here
      const {
        id,
        title,
        description,
        price,
        rating,
        brand,
        discountPercentage,
        insuranceCost,
      } = product;
      console.log(`id : ${id}`);
      console.log(`title : ${title}`);
      console.log(`description: ${description}`);
      console.log(`price : ${price} euros`);
      console.log(`rating : ${rating}`);
      console.log(`brand : ${brand}`);
      console.log(
        `finalPriceWithInsurance : ${finalPriceWithInsurance(
          price,
          discountPercentage,
          insuranceCost
        )} euros`
      );
    };

    /**
     * find a product from products array based on a particular product's id
     * @param {*} id  particular product's id
     * @returns return the found product
     */
    const findProduct = (id) => products.filter((product) => product.id === id);

    // user authentication check
    if (checkLoginStatus()) {
      console.log("login successful");
      const selectedProduct = findProduct(101);
      selectedProduct.map((product, index) => {
        // print all the products
        // console.log(product);
        console.log(`Product ${index + 1}: `);
        printProductDetails(product);
        console.log("------------------------------------------");
      });
    } else {
      console.log("Please login first");
    }
    ```

- spread operator

  ```js
  // Program 14: E-commerce app [spread operators]
  // data collected from API - https://dummyjson.com/products
  const products = [
    {
      id: 101,
      title: "iphone 9",
      description: "brilliant phone with 4k camera",
      price: 549,
      discountPercentage: 8.5,
      rating: 4.69,
      brand: "Apple",
      insuranceCost: 8,
    },
    {
      id: 102,
      title: "iphone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      brand: "Apple",
      insuranceCost: 8,
    },
    {
      id: 103,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      brand: "Samsung",
      insuranceCost: 8,
    },
    {
      id: 104,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      brand: "Oppo",
      insuranceCost: 8,
    },
  ];

  /**
   * check login status of the user
   * @returns true/false based on login status
   */
  const checkLoginStatus = () => {
    const loginStatus = true;
    return loginStatus;
  };

  /**
   * calculate the discount amount of a product
   * @param {number} p The product price
   * @param {number} disPercentage The discount percentage of the product
   * @returns the discount amount
   */
  const discount = (p, disPercentage) => (p * disPercentage) / 100;

  /**
   * calculate the round value of any amount
   * @param {number} p The product price
   * @returns the rounded value
   */
  const roundPrice = (p) => Math.round(p);

  /**
   * calculate the priceAfterDiscount
   * @param {number} p The product price
   * @param {number} dp discount percentage
   * @returns the price after discount
   */
  const priceAfterDiscount = (p, dp) => p - discount(p, dp);

  /**
   * calculate the product finalPriceWithInsurance
   * @param {number} p the price of product;
   * @param {number} dp the discount percentage of prodcut;
   * @param {number} ic the product insurance cost
   * @returns the final price including insurance cost
   */
  const finalPriceWithInsurance = (p, dp, ic) =>
    roundPrice(priceAfterDiscount(p, dp) + ic);

  /**
   * print product details
   * @param {object} product the product object
   */
  const printProductDetails = ({
    id,
    title,
    description,
    price,
    rating,
    brand,
    discountPercentage,
    insuranceCost,
  }) => {
    console.log(`id : ${id}`);
    console.log(`title : ${title}`);
    console.log(`description: ${description}`);
    console.log(`price : ${price} euros`);
    console.log(`rating : ${rating}`);
    console.log(`brand : ${brand}`);
    console.log(
      `finalPriceWithInsurance : ${finalPriceWithInsurance(
        price,
        discountPercentage,
        insuranceCost
      )} euros`
    );
  };

  /**
   * find a product from products array based on a particular product's id
   * @param {*} id  particular product's id
   * @returns return the found product
   */
  const findProduct = (id) => products.filter((product) => product.id === id);

  // user authentication check
  if (checkLoginStatus()) {
    console.log("login successful");
    const selectedProduct = findProduct(101);
    selectedProduct.map((product, index) => {
      // print all the products
      // console.log(product);
      console.log(`Product ${index + 1}: `);
      printProductDetails({ ...product });
      console.log("------------------------------------------");
    });
  } else {
    console.log("Please login first");
  }
  ```

- reduce() higher order function

  - sum of all numbers; when sum think reduce
  - it executes a reducer function for array element.
  - it returns a single value: the function's accumulated result.
  - it does not execute the function for empty array elements.
  - it does not change the original array.

    ```js
    const numbers = [10, 20, 30, 40, 50];
    // first call -> previous 10, current 20
    // 2nd call -> previous 30, current 30
    // 3rd call -> previous 60, current 40
    // 4th call -> previous 100, current 50

    const result = numbers.reduce((previous, current) => {
      return previous + current;
    });
    console.log(result);
    ```

## 11. Document Object Model (DOM)

- finding, modifying, adding or removing html elements

  ```js
  // DOM -> Document Object Model
  // Using DOM We can Find / get, change, add, or delete HTML elements.

  // How to find HTML Elements
  // document.getElementById()
  // document.getElementsByTagName()
  // document.getElementsByClassName()
  // document.querySelector()

  // How to change HTML Elements  (collected from W3School website)
  // element.innerHTML =  new html content -> Change the inner HTML of an element
  // element.attribute = new value  -> Change the attribute value of an HTML element
  // element.style.property = new style -> Change the style of an HTML element

  //Create, remove, add html element
  // creating html element and adding to a div
  var firstDiv = document.querySelector("#first-div");
  console.log(firstDiv);

  var heading3 = document.createElement("h3");
  var text = document.createTextNode("This is heading 3");
  heading3.appendChild(text);
  firstDiv.appendChild(heading3);

  var heading5 = document.createElement("h5");
  var text = document.createTextNode("This is heading 5");
  heading5.appendChild(text);
  firstDiv.appendChild(heading5);

  // remove element
  firstDiv.removeChild(heading5);

  //adding element before
  var heading6 = document.createElement("h6");
  var text = document.createTextNode("This is heading 6");
  heading6.appendChild(text);
  firstDiv.insertBefore(heading6, heading3);
  // firstDiv.insertAfter(heading6, heading3);
  ```

- Event and event listeners

  - keyboard event

    ```js
    // KeyboardEvent Object
    // 1. Keydown - pressing a key, can repeat
    // 2. keypress (may not supported by some browsers)
    // 3. keyup
    // some properties - key, keyCode, code, shiftKey, ctlKey, repeat

    const textarea = document.querySelector("textarea");
    textarea.addEventListener("keydown", function (e) {
      if (e.repeat) {
        alert("do not repeat");
      }
    });
    // textarea.addEventListener("keypress", function () {
    //   console.log("keypress");
    // });
    // textarea.addEventListener("keyup", function (e) {
    //   if (e.shiftKey) {
    //     console.log("shift+" + e.key);
    //   }
    // });
    ```

  - Mouse event

    ```js
    // MouseEvent - <html>, <head>, <meta>, <title>, <br>, <style>, <script>, <iframe>, <param>, <base>, <bdo>
    // 1. onclick
    // 2. ondblclick
    // 3. onmousedown
    // 4. onmousedup
    // 5. onmouseenter
    // 6. onmouseleave
    // 7. onmousemove
    // 8. onmouseover

    console.clear();
    const div = document.querySelector("div");

    div.addEventListener("click", function (e) {
      //   console.log("click is occured");
      //   console.log(e.target);
      //   console.log(e.target.id);
      //   console.log(e.target.className);
      //   console.log(e.target.innerHTML);
      //   console.log(e.target.innerText);
      //   console.log(e.target.textContent);
    });

    // div.addEventListener("dblclick", function () {
    //   console.log("dblclick is occured");
    // });
    // div.addEventListener("mousedown", function () {
    //   console.log("mousedown is occured");
    // });
    // div.addEventListener("mouseup", function () {
    //   console.log("mouseup is occured");
    // });
    // div.addEventListener("mouseenter", function () {
    //   console.log("mouseenter is occured");
    // });
    // div.addEventListener("mouseleave", function () {
    //   console.log("mouseleave is occured");
    // });
    // div.addEventListener("mouseover", function () {
    //   console.log("mouseover is occured");
    // });
    // div.addEventListener("mousemove", function (e) {
    //   //   console.log("mousemove is occured");
    //   //   console.log("clientX = " + e.clientX + ", clientY = " + e.clientY);
    //   console.log("offsetX = " + e.offsetX + ", offsetY = " + e.offsetY);
    // });

    const buttons = document.querySelectorAll(".btn");

    Array.from(buttons).map((button) => {
      button.addEventListener("click", function (e) {
        console.log(e.target.innerText);
      });
    });
    ```

  - onchange event

    ```js
    // <input /> - text, number, password, email, color,  radio, checkbox, search, time, date, datetime, week, month, url, tel, file,
    // <select>,
    // <textarea>

    console.clear();
    // const input = document.querySelector("input[name=name]");
    // input.addEventListener("change", changeHandler);

    // function changeHandler(e) {
    //   //   console.log(e);
    //   //   console.log(e.type);
    //   //   console.log(e.target);
    //   //   console.log(e.target.className);
    //   //   console.log(e.target.id);
    //   console.log(e.target.value);
    // }

    // const programs = document.querySelectorAll("input[name=program]");
    // console.log(programs);

    // Array.from(programs).map((program) => {
    //   program.addEventListener("change", programHandler);
    // });

    // function programHandler(e) {
    //   if (e.target.checked) {
    //     console.log(e.target.value);
    //   }
    // }

    const department = document.querySelector("#department");
    // console.log(department);

    department.addEventListener("change", handleDepartment);

    function handleDepartment(e) {
      console.log(e.target.value);
    }
    ```

  - onchange event

    ```js
    // finding the elements
    const form = document.querySelector("form");
    const name = form.querySelector("div #name");
    const email = form.querySelector("div #email");
    const password = form.querySelector("div #password");

    form.addEventListener("submit", formHandler);

    function formHandler(e) {
      e.preventDefault();

      const userInfo = {
        name: name.value,
        email: email.value,
        password: password.value,
      };

      console.log(userInfo);
      name.value = "";
      email.value = "";
      password.value = "";
    }
    ```

- aa

## 12. Browser Object Model (BOM)

- BOM allows javascript to speak or communicate with broswer

  - popup boxes

  ```js
  console.clear();
  console.log(window);
  console.log(window.location); // return current page url
  console.log(window.location.href); // return entire url
  console.log(window.location.protocol); // return protocol
  console.log(window.location.hostname); // return hostname
  console.log(window.location.port); // return port
  console.log(window.location.pathname); // return pathname
  ```

- popup boxes -> alert(), confirm(), prompt()

  ```js
  const deleteUser = () => {
    const value = confirm("Do you want to Delete the user? ");
    if (value) {
      console.log("user is deleted");
    } else {
      console.log("user is not deleted");
    }
  };

  deleteUser();
  ```

- Timing event methods -> setTimeout(), setInterval()

  - if you want to do something after a specific time then we can take help of setTimeout(), setInterval() from window object

  ```js
  const getAllUsers = () => {
    const users = [
      {
        id: 1,
        name: "anisul islam",
      },
      {
        id: 2,
        name: "Robert william",
      },
    ];
    console.log(users);
  };

  setTimeout(getAllUsers, 2000);

  // setInterval() repeats after certain period of time
  setInterval(() => {
    const users = [
      {
        id: 1,
        name: "anisul islam",
      },
      {
        id: 2,
        name: "Robert william",
      },
    ];
    console.log(users);
  }, 2000);
  ```

## 13. Error Handling

- compile time error vs run time error
- [types of error](https://textexpander.com/blog/the-7-most-common-types-of-errors-in-programming-and-how-to-avoid-them) - syntax error, logical error, run-time error
- runnable program can be handled by try, catch, finally, throw (defines a custom error)

  ```js
  // without try,catch
  alert("hello");
  alert(num);
  alert("bye");

  // with try-catch
  try {
    alert("hello");
    alert(num);
    alert("bye");
  } catch (error) {
    console.log("inside catch block");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
  } finally {
    alert("bye");
  }


  <!-- The throw statement allows you to create a custom error. -->
  throw "not valid input"
  throw 0
  throw {message: 'wrong input'}
  throw true
  ```

## 14. Local storage

```js
// Web storage API - allows us to store & read data in browser
// Web storage API - localStorage, sessionStorage

// localStorage - store, read, update and remove data
// no expiry date: data never gets lost even if you close the browser

// localStorage store data as key value pair - string

// setItem(key, value)
// localStorage.setItem("userName", "anisul islam");
// localStorage.setItem("password", "0123456789");

// getItem(key)
// const userName = localStorage.getItem("userName");
// const userPassword = localStorage.getItem("password");
// console.log(userName, userPassword);

// removeItem(key)
// localStorage.removeItem("userName");
// localStorage.removeItem("password");

// setItem(key, value)
// const countries = ["Australia", "Bangladesh", "Nepal"];
// localStorage.setItem("countries", JSON.stringify(countries));

// // getItem(key)
// const countriesList = JSON.parse(localStorage.getItem("countries"));
// console.log(countriesList);

// localStorage.clear();
```

## 15. Best Practices

- use naming conventions for variables
- avoid unncessary variables
- variable declaration on top
- use const for object and array
- switch, case, default
- == vs ===
- [access dom less](https://youtu.be/PZVF5l0D7_E)

## 16. npm & ESLint setup

- [ESLint documentation](https://github.com/anisul-Islam/eslint-documentation)

## 17. ES6

### ES6 Syntax

- Template literals

  ```js
  const num1 = 20;
  const num2 = 30;
  const result = num1 + num2;
  console.log(num1 + " + " + num2 + " = " + result);
  console.log(`${num1} + ${num2} = ${result}`);
  ```

- Default & Rest parameters

  ```js
  // default parameter
  function showGreeting(message = "Have a good day") {
    console.log(message);
  }
  // think about user input; what happen if we do not have the input
  showGreeting("Good Morning");
  showGreeting();

  // rest parameter - can be used as the last parameter
  function add(...restNumbers) {
    let sum = 0;
    for (let x = 0; x < restNumbers.length; x++) {
      sum += restNumbers[x];
    }
    return sum;
  }
  console.log(add(10, 20, 30, 40));

  // another example
  const numbers = [20, 30, 40, 50];
  const [num1, ...rest] = numbers;

  const user = {
    id: 101,
    name: "anisul",
    age: 32,
  };
  const { id, ...rest } = user;
  printInfo(rest);
  ```

- Spread operators

  ```js
  // spread operator - can be used for array & object

  // example for array concatenation
  const macUsers = ["Anisul", "Alex", "Mercedez"];
  const windowsUsers = ["Mercey", "Goitom", "Berk"];
  // let allOSUsers = macUsers.concat(windowsUsers);
  // console.log(allOSUsers);
  let allOSUsers = [...macUsers, "David", ...windowsUsers];
  console.log(allOSUsers);

  // example for object concatenation
  const user1 = {};
  const user2 = {};
  const allUsers = { ...user1, ...user2 };

  function printUserInfo(name, age, nationality) {
    console.log(`My name is ${name}. I am ${age}. I am from ${nationality}`);
  }
  function printUserInfo2(info) {
    console.log(
      `My name is ${info.name}. I am ${info.age}. I am from ${info.nationality}`
    );
  }

  const user = {
    name: "Anisul Islam",
    age: 32,
    nationality: "Bangladesh",
  };
  printUserInfo(user.name, user.age, user.nationality);
  printUserInfo2({ ...user });
  ```

- Destructuring

  ```js
  function printUserInfo2(info) {
    const { name, age, nationality } = info;
    console.log(`My name is ${name}. I am ${age}. I am from ${nationality}`);
  }

  const user = {
    name: "Anisul Islam",
    age: 32,
    nationality: "Bangladesh",
  };

  printUserInfo2({ ...user });
  ```

- Object Literals

  ```js
  function getUserInfo(name, age) {
    return {
      name, // name: name
      age, // age: age
    };
  }
  console.log(getUserInfo("anis", 32));
  ```

- for of and for in

  ```js
  // for of works with iterable obejcts - array, objects
  const numbers = [10, 20, 30, 40, 50];
  for (const number of numbers) {
    console.log(number);
  }

  // for in works with object
  ```

### classes & modules

- class & Inheritance

  ```js
  class Person {
    constructor(name) {
      this.name = name;
    }
    printInfo() {
      return `Hello ${this.name}. `;
    }
  }

  class Teacher extends Person {
    constructor(name, id) {
      super(name);
      this.id = id;
    }
    printInfo() {
      super.printInfo();
      return `${this.id}, ${this.name}`;
    }
  }

  const p1 = new Person("Anisul Islam");
  console.log(p1.printInfo());
  console.log(Person.prototype);

  const t1 = new Teacher("Anisul Islam", 32);
  console.log(t1.printInfo());

  // Another example
  // helper.js
  export class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    printInfo() {
      console.log(`Name: ${this.name} | Age: ${this.age}`);
    }
  }

  // index.js
  import { Student } from "./helper.js";

  const s1 = new Student("Anisul Islam", 32);
  s1.printInfo();

  const s2 = new Student("Robert", 32);
  s2.printInfo();
  ```

### Asynchronous Programming

- Synchronous , asynchronous, callback, higher order function, promise, async await

  - synchronous vs asynchronous

    ```js
    // sync vs async

    // example of synchronous js
    // js is single threaded, synchronous programming language.
    // tasks will be added in call stack, when one task is done then it will moved to the next one (LIFO)
    console.log("------------------------------------");
    console.log("Example of Synchronous programming");
    console.log(`Task 1`);
    console.log(`Task 2`);
    console.log(`Task 3`);
    console.log(`Task 4`);
    console.log("------------------------------------\n\n");
    // setTimeout() is an asynchronous function
    // tasks will be added in call stack, when one task is done then it will moved to the next one (LIFO)
    // setTimeout() will move the task into web APIs where the task will be running in background
    // other task will continue in call stack
    // when the call stack is completely empty then task (callback functions) from web APIs will be moved to task queue (FIFO)
    // when the entire call stack is empty then from task queue task will moved to call stack and the process is done

    console.log("Example of Asynchronous programming");
    // console.log(`Task 1`);
    // setTimeout(() => {
    //   console.log(`Task 2`);
    // }, 2000);
    // console.log(`Task 3`);
    // console.log(`Task 4`);

    const taskOne = () => {
      console.log(`Task 1`);
    };

    const taskTwo = () => {
      setTimeout(() => {
        console.log(`Task 2`);
        console.log("------------------------------------");
      }, 2000);
    };

    const taskThree = () => {
      console.log(`Task 3`);
    };
    const taskFour = () => {
      console.log(`Task 4`);
    };

    taskOne();
    taskTwo();
    taskThree();
    taskFour();
    ```

  - callback & higher order function

  ```js
  const square = (num) => {
    return num * num;
  };
  const exampleFunction = (num, callback) => {
    console.log(callback(3));
  };
  exampleFunction(3, square);
  ```

  ```js
  // callback function and higher order function
  // using callback we can make our code non blocking

  /*
    const printSquare = (x) => {
      console.log(`The square is ${x * x}`);
    };
  
    const square = printSquare;
    square(10);
  
    const higherOrderFunction = (y, callback) => {
      callback(y);
    };
  
    higherOrderFunction(5, square);
    */

  // event handlers are good example of callback functions , they will allow delay
  // document.getElementById('button').addEventListener('click', () => {
  //     //item clicked
  //   })

  // window.addEventListener('load', () => {
  //     //window loaded
  //     //do what you want
  //   })

  // setTimeout(() => {
  //     // runs after 2 seconds
  //   }, 2000)

  const taskOne = (callback) => {
    console.log(`Task 1`);
    callback();
  };

  const taskTwo = (callback) => {
    setTimeout(() => {
      console.log(`Task 2`);
      callback();
    }, 2000);
  };

  const taskThree = (callback) => {
    console.log(`Task 3`);
    callback();
  };
  const taskFour = () => {
    console.log(`Task 4`);
  };

  // taskOne(function t1() {
  //   taskTwo(function t2() {
  //     taskThree(function t3() {
  //       taskFour();
  //     });
  //   });
  // });
  taskOne(() => {
    taskTwo(() => {
      taskThree(() => {
        taskFour();
      });
    });
  });
  ```

  - Promise: 3 states-pending, resolve, reject

    ```js
    const promise1 = new Promise((resolve, reject) => {
      resolve("task 1");
    });
    const promise2 = new Promise((resolve, reject) => {
      resolve("task 2");
    });

    // then function will be called when promise is resolved
    // catch function will be called when promise is rejected
    // Promise is created for you most of the time but you know how to use
    promise1
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    promise2
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    ```

  - async and await

  ```js
  // promise, promise chaining, async await
  console.log("welcome");
  const taskOne = () => {
    return new Promise((resolve, reject) => {
      resolve("task 1 is completed");
    });
  };
  const taskTwo = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("task 2 is completed");
      }, 2000);
    });
  };
  const taskThree = () => {
    return new Promise((resolve, reject) => {
      reject("task 3 is not completed");
    });
  };
  const taskFour = () => {
    return new Promise((resolve, reject) => {
      resolve("task 4 is completed");
    });
  };

  // taskOne()
  //   .then((res) => console.log(res))
  //   .then(taskTwo)
  //   .then((res) => console.log(res))
  //   .then(taskThree)
  //   .then((res) => console.log(res))
  //   .then(taskFour)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  const callAllTasks = async () => {
    try {
      const t1 = await taskOne();
      console.log(t1);
      const t2 = await taskTwo();
      console.log(t2);
      const t3 = await taskThree();
      console.log(t3);
      const t4 = await taskFour();
      console.log(t4);
    } catch (e) {
      console.log(e);
    }
  };

  callAllTasks();

  console.log("bye");
  ```

- fetch data

  ```js
  const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        let lists = "";
        data.map((data, index) => {
          lists += `<li>${data.title}</li>`;
        });
        document.querySelector(".container ol").innerHTML = lists;
      });
  };

  loadData();
  ```

## 18. JSON

- Why JSON?
- What is JSON?
  - Javascript Object Notation
  - text based form
  - human readable form
  - language independent
  - to store and exhange data between client & server
- JSON Basic syntax

  ```json
      {
        "key":"value",
        "key":value,
      }
  ```

- JSON Value types - String, number, boolean, null, objects, array
- How to access JSON Objects -> dot notation, bracket notation
- create an user.json file and add some json data

  - accessing json data from other file

  ```js
  fetch("./users.json")
    .then((response) => response.json())
    .then((json) => console.log(json));

  // other way
  import users from "./users.json" assert { type: "json" };
  console.log(users);
  ```

- JSON VS JS Object
  - key with double quotation
  - JSON can not contain function but JS Object does
  - JS Object is only for JS but JSON for all other programming languages
- client-server conversion

  - Before using json data in client convert into JS Object -> JSON.parse()

    ```js
    // json object
    const jsonData = '{ "name": "John", "age": 22 }';

    // converting to JavaScript object
    const obj = JSON.parse(jsonData);

    // accessing the data
    console.log(obj.name); // John
    ```

  - Before sending to server convert into JSON -> JSON.stringify()

    ```js
    // JavaScript object
    const jsonData = { name: "John", age: 22 };

    // converting to JSON
    const obj = JSON.stringify(jsonData);

    // accessing the data
    console.log(obj); // "{"name":"John","age":22}"
    ```

## 19. API Calling

- make sure to install json formatter extension for google chrome
- Some free api

  - [dog api](https://dog.ceo/api/breeds/image/random)
  - [country api](https://restcountries.com/v3.1/all)
  - [fake store api](https://fakestoreapi.com/)
  - [json placeholder free api](https://jsonplaceholder.typicode.com/)
  - [dummy json api](https://dummyjson.com/)
  - [users api create by me](https://rest-api-mongodb-2022.herokuapp.com)
    - [check documentation](https://github.com/anisul-Islam/complete-rest-api-with-mongodb)
  - [users api create by me](https://rest-api-mongodb-2022.herokuapp.com)

- API using fetch

  - get method

    ```js
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json));

    // can catch client error
    fetch("https://jsonplacholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));

    // can not catch server error
    fetch("https://jsonplaceholder.typicode.com/posts/101")
      .then((response) => response.json())
      .then((json) => console.log(json));

    // solution: add an if statement
    fetch("https://jsonplaceholder.typicode.com/posts/101")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
    ```

  - post method for creating resources

    ```js
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    ```

  - put method for updating a resource

    ```js
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    ```

  - delete method for deleting a resource

    ```js
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });
    ```

  - fetch detailed example

    ```js
    // 4 ways to call api - XMLHttpRequest, fetch, axios, jquery

    // fetch() has replaced XMLHttpRequest
    // fetch() - global method for making HTTP Request
    // 2 ways to call - then, async await

    // + fetch() is easy to use compare to XMLHttpRequest
    // + fetch() returns a promise
    // - returned promise can only handle network error
    // - does not support all the older browser

    // method for making HTTP Request
    const makeRequest = async (url, config) => {
      const res = await fetch(url, config);
      if (!res.ok) {
        const message = `Error : ${res.status}`;
        throw new Error(message);
      }
      const data = await res.json();
      return data;
    };

    const deleteData = () => {
      makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };

    deleteData();

    // another example with fetch and async await

    const loadData = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          let lists = "";
          data.map((data, index) => {
            lists += `<li>${data.title}</li>`;
          });
          document.querySelector(".container ol").innerHTML = lists;
        });
    };

    loadData();

    const loadAllTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await res.json();
        let lists = "";
        todos.map((data) => {
          lists += `<li>${data.title}</li>`;
        });
        document.querySelector(".container ol").innerHTML = lists;
      } catch (error) {
        console.log(error);
      }
    };
    loadAllTodos();
    ```

- axios example

  ```js
  // axios is a js library
  // it helps to make request from browser (plain js/Vue/React/Angular), node.js

  // + very easy to use
  // + it supports all modern browser includig IE
  // + it returns promise
  // + throws error brilliantly
  // + No need to set header cause axios is intelligent

  // axios(config)
  // axios(url [, config])

  // axios.get(url [, config])
  // axios.post(url [, config])
  // axios.put(url [, config])
  // axios.patch(url [, config])
  // axios.delete(url [, config])

  // axios returns response object - data, status, statusText, headers, config

  step1: add axios cdn

  axios("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

  axios("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => console.log(response));

  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1,
    })
    .then((response) => console.log(response));
  ```

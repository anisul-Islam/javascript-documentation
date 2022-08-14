# javascript-documentation

## 1. Introduction to Javascript

- What is Javascript?
  - A programming language for web.
  - it can be used in front-end and back-end
- Why Javascript?
  - It adds interactivity to the web page such as adding items to the carts, form validation etc.
  - Example: Create a button with HTML, Style with CSS and add clicking functionality by using javascript

## 2. Output & comment

- output functions: functions that will help you to show output such as document.write(), console.log(), alert()
- console has variations: console.clear(), console.error(), console.info(), console.warn()
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

## 2. Tokens

- Keywords: javascript reserved words for specific reasons.

  - Example - abstract, break, char, double, export, import, try, catch, finally, throw, throws, if, else, switch, case, break, default, continue,for, while, do, var, let, const, class, extends, implements, public, private, protected, new, static, this, true, false, boolean, string, number, function, instanceof

- puncuators
  - () round brackets / parentheses
  - {} curly brackets / braces
  - [] square brackets / brackets
  - <> angle brackets / chevrons
- Data types

  - Primitive data types

    - null -> represent no value

    - Symbol -> used as an identifier for object properties.
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

      // Undefined -> data type for variable without value
      console.log(typeof x); // undefined

      // null -> intentional missing object value
      console.log(typeof null);

      /*
       Symbols are unique identifiers
       introduced in ES6
       it can be used when defining constants such as enum for uniqueness
       */
      const symbol1 = Symbol("foo");
      const symbol2 = Symbol("foo");
      console.log(typeof symbol1); // symbol
      console.log(symbol1 === symbol2); // false
      ```

  - Non Primitive data types

    - Object (Array is also part of Object type)
    - Function
    - Example

      ```js
      // Object type -> instance for accessing its members
      console.log(tyoeof {name: 'anis'});
      console.log(typeof [1,2,3]) // array is object type

       // function type
       console.log( typeof function display () { }) // function type

      ```

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

  - 3 most popular variable naming style
    - Underscore: first_name, last_name
    - Upper Camel Case (Pascal Case): FirstName, LastName
    - Lower Camel Case: firstName, lastName
  - var vs let vs const

    - 2 important things: reassign, scope - block, function, global
    - var variable can be reassigned and function scoped.

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

    - const variable can not be reassigned but blocked (a set of curly braces) scoped.

      ```js
      const name = "alex";
      name = "robin"; // reassign is not allowed for const variables

      if (true) {
        const age = 32;
      }

      console.log(name);
      console.log(age); //  not allowed as const variable is blocked scoped
      ```

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
  - Create area calculator, temperature calculator programs using arithmetic operators
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

## 3. Prompt & Data Type conversion

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

## 4. Math methods

- max(), min(), sqrt(), pow(), ceil(), floor(), round(), random()

  ```js
  console.log(Math.max(20, 30));
  console.log(Math.min(20, 30));
  console.log(Math.floor(3.4));
  console.log(Math.ceil(3.4));
  console.log(Math.round(3.4));
  console.log(Math.random());

  const randomNumber = Math.floor(Math.random() * 5) + 1;
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

## 5. Functions - traditional & arrow, string literals, jsdoc

- Traditional function syntax and example

  - Function is a block of codes for a specific task.
  - Function is reusable.
  - Separation of concerns.

    ```js
    // Function example

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

- Arrow function

  - Arrow function syntax and example

    ```js
    // Arrow function vs Traditional function

    // demo1 - must use parenthesis for no parameters, but for one parameter its optional
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

    // returning value in arrow function - no need to use curly braces if returning or dealing with single statement
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

## 7. Control statement

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

## 8. Object & Array

- Object

  - object is one type of variable that can store differnt types of variables
  - object syntax and example

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
      object properties that holds a function is called Method. Use dot operator for accessing.
      */
      this.display = function () {
        console.log(this.name);
      };
    }

    const s1 = new Student("Anisul Islam", 27, 3.92, ["Bengali", "English"]);
    const s2 = new Student("Rabeya Begum", 23, 4.92, ["Bengali", "Urdu"]);
    const s3 = new Student("Milon", 29, 4.68, ["Bengali", "Hindi"]);

    console.log(s1);
    console.log(s2);
    console.log(s3);
    s1.display();
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

## 9. Higher Order Array function, spread operator & destructure

- map() higher order function

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
    };
    let { fullName, gpa, languages } = student2;
    console.log(fullName);
    console.log(languages.native);

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

## 10. Document Object Model (DOM)

## 11. Browser Object Model (BOM)

## 12. Error Handling

## 13. Local storage

## 14. API Calling

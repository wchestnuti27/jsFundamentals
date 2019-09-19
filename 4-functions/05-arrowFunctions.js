// arrow functions (or fat arrow functions) were introduced in ES6. They are a more concise way to write function expressions - NOT function declarations.
    // That means that arrow functions do not get hoisted
    ​
    // BLOCK BODY
    let hi = () => {
        console.log('hi');
        // return ---- block body arrow functions must have a return in the body of the function
    }
    ​
    hi();
    ​
    // CONCISE BODY
    let hi = () => console.log('hi');
        // concise body arrow functions return by default
    hi();
    ​
    ​
    // CONCISE vs BLOCK
    let apples = (x) => console.log(`There are ${x} apples.`);
    apples(10);
    ​
    let apples = x => {
        console.log(`There are ${x} apples.`);
    }
    apples(15);
    ​
    // Single parameters do not need to be wrapped in parentheses, but multiple parameters DO need to be


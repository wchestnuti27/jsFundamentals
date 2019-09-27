/*
    -Introduced in ES8, async functions can be thought of as an alternate way of writing promise based code - wihich allows us to avoid chaining promises.

    - async / await allow us to program using an asynchronous request, like a fetch in a synchronous manner
*/

// syntax: - async functions unlock the use of the await keyword inside of an async function. Using await in any other case results in any other case results in a syntax error

async function myFn (){
    // await...
}

const myFn = async () => { // fat arrow function
    // await...
}

const myFn = () => {
    await  // this would result in  syntax error since the function is not declared as an async function
}

// async functions are normal javascript functions but they always return a promise by default

async function fn (){
    return 'hello'
}

fn().then(console.log)

function fn(){
    return Promise.resolve('hello');
}

fn().then(console.log)

// catching errors

aysnc function foo () {
    throw Error('this a mistake');
}

foo().then(console.log);
//foo().catch(console.log);

// await

// async functions pause at each await expression

fetch('https://random.dog/woof.json')
    .then(response => response.json)
    .then(json => console.log(json))
    .catch(error => console.log(error))


    const response = await fetch('https://random.dog/woof.json');
    const json = await response.json();
    console.log(json);
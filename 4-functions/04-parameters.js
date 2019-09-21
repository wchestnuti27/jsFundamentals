function zach(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
}
​
zach('cheese pizza');
​
// function parameters are place holders for data that we pass into the function when calling or 'invoking' the function
​
// functions need parameters to be able to accept data that we pass to them
​
/*
CHALLENGE
************
​
    - Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/
​
function myName(fName, lName) {
    let fullName = `${fName} ${lName}`;
    console.log(`Hello, my name is ${fullName}`)
}
​
myName('Zach', 'Maynard');
myName('Jessica', 'Cooke');
myName('Daniel', 'Lufcy');
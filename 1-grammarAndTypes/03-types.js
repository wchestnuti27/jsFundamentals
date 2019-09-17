// BOOLEAN: has two possible values of either true or false
​
let on = true;
console.log(on);
​
let off = false;
console.log(off);
​
// NULL: null is an empty value. Think of it as an empty container. Nothing is in it, but it can be filled in later
​
let empty = null;
console.log(empty);
​
// UNDEFINED: no value is assigned and does not act as an empty container
​
let undef = undefined;
console.log(undef);
​
let correct;
console.log(correct);
​
// NUMBERS: numbers are literally just numbers. Also referred to as integers
​
let degrees = 85;
console.log(degrees);
​
let precise = 999999999999999; // 15 9's
console.log(precise);
​
let rounded = 9999999999999999; // 16 9's
console.log(rounded);
​
let notQuite = 0.2 + 0.1;
console.log(notQuite);
​
let a = Number('123');
console.log(a);
​
// STRINGS: datatype used to represent text. Either wrapped in single or double quotes
​
let stringOne = 'single quotes';
let stringTwo = "double quotes";
console.log(stringOne, stringTwo);
​
// numbers vs strings
let first = 1050 + 100;
console.log(first);
​
let second = '1050' + '100';
console.log(second);
​
// OBJECTS: objects are used to store many values instead of a singular value
// objects hold key/value pairs
​
let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}
​
console.log(frodo);
console.log(typeof frodo);
​
// ARRAYS: containers that hold a list of items
​
let burritos = ['large', 4, true];
console.log(burritos);
console.log(typeof burritos);
​
// addition and concatenation
let third = 1050 + '100';
console.log(third);
console.log(typeof third);
​
/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
​
    Set each variable to its respective type.
​
    console.log your whole address (with a space between variables).
*/
​
let firstName = 'Zach'
let lastName = 'Maynard'
let houseNumber = 12175
let street = 'Visionary Way'
let city = 'Fishers'
let state = 'IN';
let zipcode = 46038;
​
console.log(firstName + ' ' + lastName + ' ' + houseNumber + " "  + street + " " + city + " "  + state + ' ' + zipcode)
console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode);
​
// STRING PROPERTIES
    // properties are qualities associated with a datatype
    // strings and number both have qualities associated with them, and their own properties
​
let myName = 'Zach';
console.log(myName.length); // only time javascript doesnt start counting from 0
​
// STRING METHODS: methods are tools that help us manipulate our data
    // .Properties use '.', methods use '.Methods()'
​
let myNameIs = 'Zach';
console.log(myNameIs.toUpperCase());
​
let home = 'my home is greenwood';
console.log(home.includes('greenwood'));
​
// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string
​i
let sent = 'this sentence will be split into individual parts';
let newSent = sent.split('');
console.log(newSent);
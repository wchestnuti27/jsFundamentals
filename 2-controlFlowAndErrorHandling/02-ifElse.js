/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log the first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/
// BRONZE
let name = 'ZAchARy';
// strings can be accessed by an index number using bracket notation
if (name[0] == name[0].toUpperCase()) {
    console.log(name)
} else {
    console.log('hey, this isnt written correctly')
}
// SILVER
let name = 'zAchARy';
if (name[0] == name[0].toUpperCase()) {
    console.log(name[0])
} else {
    console.log(name.slice(1).toLowerCase())
}
// the slice() method extracts parts of a string and returns the exrtacted parts in a new string
// GOLD
let name = 'ZAchARy';
if (name[0] == name[0].toUpperCase()) {
    let isUppercase = name[0] + name.slice(1).toLowerCase();
    console.log('console.log #1:', isUppercase);
} else {
    let notUppercase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log('console.log #2:', notUppercase);
}
Collapse



// else if

let age = 15

if (age >= 25) {
    console.log('yay, you can rent a car')
} else if (age >= 21) {
    console.log('yay, you can drink')
} else if (age >= 18) {
    console.log('yay, you can vote')
} else if (age >= 25) {
    console.log('sorry, youre too young to do anything fun')
}



let hi = () => {
//    (1)
    return 'hi'
}
//      (2)      (3)
let greeting = hi();

console.log(greeting);

/*
    1. keyword that brings data from inside of the local scope of the function outside of the function
    2. declare a new variable to hold the value of the return
    3. when called or "invoked", the function return becomes the value of our variavble 'greeting'
*/

function capitalizeName (name){
    let capName = ''
    for (let l in name) {
        if (l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    console.log(capName);
    return capName;
}

const myName = capitalizeName('zAcHARY');
const jessicaName = capitalizeName('jeSSiCa');
console.log(myName + ', how are you doing today?');
console.log(`$jessicasName`), how are you doing today


// Make a tip calculator using a function
// Have it return the value 
// capture that returned value in a variable 
// print that variable


function tipCalculator (bill) {
    let tip = bill * 0.2;
    return tip.toFixed(2) /* toFixed() is the number of digits to appear after a decimal*/
}

let totalTip = tipCalculator(55.34);
console.log(totaltip);
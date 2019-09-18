function hi(){
    console.log('Hi')
    return 'h1';
}

// nothing
// HI
console.log(hi);  
console.log(hi());

/* - the parentheses after a function IMMEDIATELY invoke the function that's being called 
   - we get undefined because we afre not returning any informaion or data from out function
*/

//  Challenge: Create a function that, when invoked, lists out the numbers 1 - 10

function list (){
     for(num = 0; num < 11; num++) {
         console.log(num);
     }
}

// - Given the array, create a function that lists out the values individually

function values (){
    for (let string of arr) {
        console.log(string);
    }
}
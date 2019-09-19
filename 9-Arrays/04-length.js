let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length); // length is the only thing in JavaScript that does not start counting from 0
​
let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length);
console.log(colors.toString());
​
console.log(typeof colors);
​
/*
CHALLENGE
************
​
    - First check if you are working with an array
    - Then flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method only, print the values of the newly arranged array
*/
​
let arr = [1, 2, 3, 4, 5];
​
// regular function
if (arr instanceof Array === true) {
    let revArr = arr.reverse();
    revArr.forEach(function(num){
        console.log(num);
    });
}
​
// fat arrow function
if (arr instanceof Array === true) {
    let revArr = arr.reverse();
    revArr.forEach(num => console.log(num));
}
Collapse







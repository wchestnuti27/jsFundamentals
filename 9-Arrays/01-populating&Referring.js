// arrays are containers that hold a list of items
// denoted by [];
​
// they can hold multiple datatypes
​
let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);
​
// to dig into an array we can use sqaure bracket notation that contains the index number that we want to reference
​
let students = ['Tony', 'Marshall', 'Ryan', 'Ray', 23, true, ['Rhys', 'Iesha', 'Amira']];
​
console.log(typeof students); // object
console.log(students instanceof Array); // true ---> instanceof operator is used to check the type of an object at run time. Arrays are technically 'objects'
console.log(students[1]);
console.log(students[2]);
​
/*
CHALLENGE
************
​
    - go into the nested array and get 'Amira'
    - print out "Hello Amira, you look nice today"
*/
​
let students = ['Tony', 'Marshall', 'Ryan', 'Ray', 23, true, ['Rhys', 'Iesha', 'Amira']];
​
console.log(`hello`, students[6][2] + ', ' + `you look nice today`);
let name = students[6][2];
console.log(`Hello ${name}, you look nice today`);
Collapse





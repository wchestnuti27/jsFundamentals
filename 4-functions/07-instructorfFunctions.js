let person 1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}

let person 2 = {
    name: 'Jeremy',
    age: 15,
    canVote: false
}

let person 3 = {
    name: 'Tyler',
    age: 38,
    canVote: true
}

// (1)      (2)       (3)
function Person(name, age, canVote) {
// (4)  (5)   (6)                     
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
//             (7)  (8)
let person4 = new Person('James', 80, true)
console.log(person4);

// //  1. the function keyword
//     2. the function name, For constructor functions, the name should be capitalized
//     3. parameters. These will be the values of the object once we call the function
//     4. The "this' keyword gives us the ability to fefer back to whatever called or activated it. In this case, 'this' refers to or function "Person"
//     5. this will be the key of the new object we create. This is NOT referring to the parameter
//     6. this is referring to the parameter we pass through our constructor function
//     7 and 8. the "new" keyword is calling our Person constructor function, and creating a "new" person with the values we pass in as arguments


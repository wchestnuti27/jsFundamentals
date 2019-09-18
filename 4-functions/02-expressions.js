//   (1)
let hey = function hi(){
    console.log('Hi')
}

/*
    1. the variable 'hey' is now repersentative of the function'hi()'

    - difference between function declarations and functions exressions:
        - function declarations GET hoisted
        - function expressions DO NOT get hoisted

*/

function myName (fName, lName){
    let fullName = fName + ' ' + lName;
    console.log(`Hello, my name is ${fullName}`)
}

myName('Zach', 'Maynard');
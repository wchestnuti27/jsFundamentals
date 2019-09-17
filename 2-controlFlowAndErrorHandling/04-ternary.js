// Act as a shortcut for writing if/else or switch statements

let num = 6;

// ternary
(num > 0) ? console.log('yes it is') : console.log('no it isnt');



if(num > 0){
    console.log('yes it is')
} else {
    console.log('no it isnt')
}


let num = 6;

(num == 0) ? console.log('hello') : (num < 0) ? console.log('hi') : console.log('goodbye');

// another way to write Ternary
(num == 0) ? console.log('hello') 
    : (num < 0) ? console.log('hi') 
    : console.log('goodbye');


let age = newFunction()

function newFunction() {
    return 18(num >= 25) ? console.log('Yay, you can rent a car') : (num >= 21) ? console.log('yay, you can drink') : (num >= 18) ? console.log('yay, you can vote') : console.log('sorry, you are too young to do anything');
}

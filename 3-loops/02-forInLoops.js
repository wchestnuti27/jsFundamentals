// great for iterating over value in an object. Poperties in an object are whas called eonrable
// for in loops iterate over an object enuerable properties

let student = {
    name: 'Peter',
    awesome: true,
    degree: 'JavaScript',
    week: 1
};

for (let item in student) {
    console.log(item);
    console.log(student[item]);
}

// made to grab keys from the Javascript.

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

// Write a for in loop that capitalizes the first letter of a name, and lowercase the rest of the name 

let name = 'doNoVaN';
let capName;

for (let n in name){
    console.log(n);
    if (n == 0) {
        capName = name[n].toUpperCase();
    } else {
        capName += name[n].tolowerCase();
    }
}
    
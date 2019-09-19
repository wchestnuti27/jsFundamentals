/*
    - how can we iterate over an array?
        - for of loop
        - for loop
        - forEach() method
​
    - all of the above iterate over properties in an array
*/
​
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
​
for (let i = 0; i < food.length; i++){
    console.log(food[i])
}
​
food.forEach(foodItem => {
    console.log(foodItem);
})
​
food.forEach((foodItem, index) => {
    console.log(foodItem);
    console.log(index);
})
​
/*
CHALLENGE
************
​
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/
​
let movies = ['Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith', 'Solo', 'Rogue One', 'A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];
​
movies.push('Force Awakens');
movies.splice(3, 1, 'The Rise of Skywalker');
​
movies.forEach(function(movie) {
    console.log(movie);
})
Collapse






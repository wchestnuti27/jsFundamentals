//   DOM stands for Document Object Model, and it is what allows out JavaScript to interact with the HTML and CSS of our webpage 

// Every element in a document - whether it be he HTML document as a whole, the head, the tables within the document, the table headers, thext within the table calls - are all part of the DOM for that HTML document. They can all be accessed and manipulaed using the DOM and a scripting language like JavaScript.


// 1.
let x = 10;
console.log(x)


// 2. // getElementById
// document.getElementById('testParagraph').style.color = 'blue';

let testParagraph = document.getElementById('testParagraph');
testParagraph.style.color = 'red';

console.log(testParagraph);

// -getElementById will grab the first HTML element with the specified value - if we have multiple elements with the same ID, it will only grab the first one. //


// 3. //  querySelectorAll & innerText, innerHTML, and text Content

console.log(document.querySelectorAll('p.sampleClass'));  // query SelectorAll returns a NodeList containing all elements that match the specified group of selectors. NodeKList objects are collection of nodes, and nodes are simply just various iems in the HTML document itself. //

document.querySelectorAll('p.sampleClass')[2].innerText = 'My text has changed!';  
// need to use bracket to select an index from NodeList array, even if there's only one element. //

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
    // pTag.innerText = 'My text has changed using a forEach method!';
    // pTag.textContent = My text has changed using a forEach method!';
    pTag.innerHTML = '<i>My text has changed using a forEach method!';
})

/* 
    INNERTEXT vs INNERHTML vs TEXTCONTENT

    - innerText simply references or allows us to change the text of a specified element. Will return only visible text in a 'node'
    -textContent does the same thing as innerText, but will return the FULL text of a 'node'
    -InnerHTML allows us to set text as well as HTML elements, which will be nested inside of the curent HTML element we're referencing
*/

console.log(document.getElementById('spanTest').innerText);
console.log(document.getElementById('spanTest').textContent);

{/* // 4. eventlisteners - click // */}

// document.getElementById('clickThisButton').addEventListener('click', event => {
//     event.target.style.backgroundColor = 'blue';

//     console.log(event);
//     console.log(event.target);
// })


/*
**************
Challenge
**************
    -make the button toggle between red and blue when clicked
*/

document.getElementById('clickThisButton').addEventListener('click', event => {
    if (event.target.style.backgroundColor == 'red') {
    event.target.style.backgroundColor = 'blue'; 
    } else {
        event.target.style.backgroundColor = 'red';
    }

    })

    console.log(event);
    console.log(event.target);


// 5. eventlisteners - keyup / getElementsByTagName

// getElementbyTagName will returtn all elements with the given tage name. We then need to use bracket notation to grab which element we want to target

console.log(document.getElementsByTagName('p'))

document.getElementById('nameInput').addEventListener('keyup', function(event) {
    console.log(event.target.value)
})

document.getElementsByTagName('p')[0].innerText = 'Something Changed';

    if (event.target.value == '') {
    document.getElementsByTagName('p')[1].innerText = 'nothing has been typed'
    } else {
    document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${event.target.value}`
    }

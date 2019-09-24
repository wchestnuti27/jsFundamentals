/* 
    What is an API?

    -API stands for Application Program Interface

    -in basic terms, API's allow applications to communicate with one another
    -the API is not the database or the server, it is the code that allows us access point(s) to the server
        -those access points come in the form of an endpoint, which directs us to different sets of data we can access


    Asynchronous Programming

        -Asychronous programming allows our code to continue to run while we're waiting on a response from the API or outside data source.  Once we've completed fetching or retreiving our data, it then presents us with that data, without having to wait on any other processes or code.
*/

const baseURL = 'https://api.spacexdata.com/v2/rockets'; // this is my base url thats reaching out to the space x rockets

const searchForm = document.querySelector('form'); // referencing 'form' from HTML document
const spaceShips = document.querySelector('ul'); // referenceing 'ul' from HTML document

searchForm.addEventListener('submit', fetchSpace); //grabbing searchform variable, adding event listener, event is the submit event and the submit event calls fetchSpace function.

function fetchSpace(event) {  // running the function (fetchSpace)

    // console.log(event)
    event.preventDefault(); // when the event is ran, prevent the page from loading


    fetch(baseURL)  // fetch starts the process of fetching a resource from a network, and that fetch returns a promise.  That promise is fulfulled or 'resolved' once the response from the fetch is available. It will also return a promise. (using .then)

    .then(data => {
        // console.log(data)
        return data.json(); // when the function is ran, json the info
    })
    .then(json => {  
        // console.log(json);

        // a callback function is a function that is to be executed after another function has finished executing. In this case, our callback function is "displayrockets", and it is waiting on our 'fetchSpace' function and all of it's promises to resolve being being called and passed data.
        displayRockets(json) //after the data is json'ed, calling the function of displayRockets
    // })
    // .catch(err => {
    //     console.log(err);   // what we would use to catch the error if the network is down.
    })
}

function displayRockets(json) { // passing info to the displayRockets function
    console.log('display results', json) // results

    let rockets = json.forEach(rocket => {
        let r = document.createElement('li');
        r.innerText = rocket.name
        spaceShips.appendChild(r);
    })
}

import express from 'express';

const app = express();      // express is a function that gives back an object

// We need a database of quotes

const quotes = [
    'JavaScript is the duct tape of the internet.',
    'Learning JavaScript is like learning to ride a bike: once you get it, you never forget.',
    'JavaScript is the language of the web, master it and you master the web.',
    'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    'JavaScript is the key to unlocking the full potential of the web.',
    'The best way to learn JavaScript is to build projects.',
    'JavaScript is not just a language, it\'s a mindset.',
    'The more you practice JavaScript, the better you get.',
    'JavaScript is the art of turning ideas into reality.',
    'In JavaScript, there are no mistakes, only lessons.',
    'JavaScript is the bridge between creativity and functionality.',
    'The journey of learning JavaScript is as important as the destination.',
    'JavaScript is the paintbrush for the canvas of the web.',
    'Every line of JavaScript you write is a step closer to mastery.',
    'JavaScript is the tool that turns your imagination into reality.'
];

/* 
    Route that sends back a random quote from the database
    - Create a GET route with the path of '/quote'
    - Your callback should reference the responseObj and use an underscore for the requestObj
    - Your code block should create a variable randomQuote that is assigned a random string from the quotes array
    - Use the responseObj.send method to send an object back with a property of quote that has the value of your randomQuote string

    ie. It sends back an object like the one below:
    {
        quote: 'JavaScript is the tool that turns ideas into reality'
    }
*/

// Random Quote Route
// When a route sends back an array or an object, it is an API route
// When a route is an API route, you should prefix the path with '/api'

app.get('/api/quote', (_, responseObj) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];      // The [Math.floor(Math.random() * quote.length)] allows us to select an index number that is randomly generated

    responseObj.send({
        quote: randomQuote
    });
});

// app.get('/', (_, responseObj) => {
//     responseObj.send('Hi there from the server!');
// });

// app.get('/data', (_, responseObj) => {
//     const data = {
//         name: 'JD',
//         age: 44
//     };
//     responseObj.send(data);
// });

app.listen(3333, () => {
    console.log('Server started on port 3333');
});
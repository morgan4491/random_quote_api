import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import api_routes from './routes/api_routes.js'
import htmlRoute from './routes/htmlRoutes.js'

const app = express();      // express is a function that gives back an object
const PORT = process.env.PORT || 3333;

// Static Middleware - Allows the client access to an entire folder and all of the file within that folder
// the static method creates a GET route for every file within the shared folder 
app.use(express.static('../client/dist')); // This path is relative to to 

// Load in Routes
app.use(api_routes);

// Load in HTML Routes
app.use(htmlRoute);

// Start the server
app.listen(PORT, () => {
    console.log('Server started on port 3333');
});


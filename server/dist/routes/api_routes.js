import { Router } from 'express';
import axios from 'axios';
const router = Router();
const people = [
    {
        id: 1,
        name: 'JD',
    },
    {
        id: 2,
        name: 'Sarah',
    },
    {
        id: 3,
        name: 'Bob',
    }
];
// Get Person by ID Route
// We are using a 'dynamic' path here - the ':' in the path allows the client to be dynamic
router.get('/api/person/:personId', (requestObj, responseObj) => {
    const person = people.find((personObj) => {
        if (personObj.id == +requestObj.params.personId) {
            return personObj;
        }
        return false;
    });
    responseObj.json(person || {
        message: 'A person with that ID could not be found.'
    });
});
// Random quote GET route 
// We are using a 'static' path here
router.get('/api/quote', async (requestObj, responseObj) => {
    console.log(requestObj.query);
    if (!requestObj.query.cat) {
        return responseObj.json({
            message: 'You must provide a cat parameter with a category that you would like.'
        });
    }
    const url = `https://api.api-ninjas.com/v1/quotes?category=${requestObj.query.cat}`;
    try {
        const res = await axios.get(url, {
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        responseObj.json({
            quote: res.data[0].quote
        });
    }
    catch (error) {
        responseObj.json({
            message: 'You must type one of the known categories.'
        });
    }
});
export default router;

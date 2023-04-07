const router = require('express').Router();
const Favorite = require('../../models/favorite');
// const getFavoriteAnime = require('../../public/js/animeFetch');
const axios = require('axios');

// GET all favorites
router.get('/', (req, res) => {
    console.log('api/favorites GET endpoint reached');
});

// GET single favorite
router.get('/:favorite_id', (req, res) => {
    console.log('api/favorites/:id GET endpoint reached');
});

// POST favorite anime
router.post('/', async (req, res) => {
    console.log('/api/favorites POST endpoint reached');
try {
    // Make a GET request to the third-party API
    const { data } = await axios.get('https://api.jikan.moe/v4/random/anime');
        
    // Extract the relevant data from the API response
     const { name, description, imgURL } = data;
        
    // Create a new Anime object with the extracted data
    const anime = new Favorite({ name, description, imgURL });
        
    // Save the new Anime object to the database
    await anime.save();
        
    // Send a success response to the client
    res.status(201).send({ message: 'Anime created successfully' });
    } catch (error) {
    res.status(400).send({ error: error.message });
    }
});


// UPDATE favorite
router.put('/', (req, res) => {
    console.log('/api/favorites PUT endpoint reached');
});

// DELETE favorite
router.delete('/', (req, res) => {
    console.log('/api/favorites DELETE endpoint reached');
});

module.exports = router;
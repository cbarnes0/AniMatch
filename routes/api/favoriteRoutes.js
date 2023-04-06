const router = require('express').Router();
const Favorite = require('../../models/favorite');

// GET all favorites
router.get('/', (req, res) => {
    console.log('api/favorites GET endpoint reached');
});

// GET single favorite
router.get('/:favorite_id', (req, res) => {
    console.log('api/favorites/:id GET endpoint reached');
});

// POST favorite
router.post('/', (req, res) => {
    console.log('/api/favorites POST endpoint reached');
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
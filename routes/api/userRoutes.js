const router = require('express').Router();
const User = require('../../models/user');

// GET all users
router.get('/', (req, res) => {
    console.log('api/users GET endpoint reached');
});

// GET single user
router.get('/:user_id', (req, res) => {
    console.log('api/users/:id GET endpoint reached');
});

// POST user
router.post('/', (req, res) => {
    console.log('/api/users POST endpoint reached');
});


// UPDATE user
router.put('/', (req, res) => {
    console.log('/api/users PUT endpoint reached');
});

// DELETE user
router.delete('/', (req, res) => {
    console.log('/api/users DELETE endpoint reached');
});

module.exports = router;
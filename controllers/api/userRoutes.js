const router = require('express').Router();
const { User, Favorite } = require('../../models');

// GET all users
// router.get('/', (req, res) => {
//     console.log('api/users GET endpoint reached');
// });

// POST a signup page
router.post('/signup', async (req, res) => {
    console.log('reached api/userroutes/signup');
    try {
        const { email, password } = req.body;
        const user = new User({ email, password });
        await user.save();
        res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// POST a login page
router.post('/login', async (req, res) => {
    console.log('reached api/userroutes/login');
    try {
      const { email, password } = req.body;
      const user = await User.findOne({email });
      if (!user || user.password !== password) {
        throw new Error('Invalid login credentials');
      }
      res.status(200).send({ message: 'Login successful' });
    } catch (error) {
      res.status(401).send({ error: error.message });
    }
  });





  

// GET all favorites from a SINGLE user
router.get('/:userId/favorites', async (req, res) => {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    try {
      const favorites = await user.getFavorites();
      res.status(200).json(favorites);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
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

// DELETE a user
router.delete('/:user_id', async (req, res) => {
    try {
      const userData = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!userData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
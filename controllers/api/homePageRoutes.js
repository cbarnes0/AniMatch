const router = require('express').Router();
const path = require('path');
const Favorite = require('../../models/favorite');
const { log } = require('console');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/views/homePage.html'));
});

const { body, validationResult } = require('express-validator');

router.post('/', 
  body('title').notEmpty(),
  body('img_url').isURL(),
  body('user_id').isInt(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { title, description, img_url, user_id } = req.body;

      const newFavorite = await Favorite.create({
        title,
        description,
        img_url,
        user_id,
      });
      console.log('Post successful');

      res.status(201).json(newFavorite);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);


module.exports = router;
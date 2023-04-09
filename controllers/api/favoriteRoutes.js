const router = require('express').Router();
const path = require('path');
const Favorite = require('../../models/favorite');
// const getFavoriteAnime = require('../../public/js/animeFetch');
const axios = require('axios');

//serve the html page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/views/favorites.html'));
});

//get all favorites by id
router.get('/:userId', async (req, res) => {
  try {
    const favoriteData = await Favorite.findAll({
      where: { user_id: req.params.userId }
    });
    if (!favoriteData.length) {
      res.status(404).json({ message: 'No favorites found for that user.' });
      return;
    }
    res.status(200).json(favoriteData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET all favorites
router.get('/', async (req, res) => {
  try {
    const favoriteData = await Favorite.findAll({
       //include: [{ model: Category}, {model: Tag}],
    });
    res.status(200).json(favoriteData);
    console.log('Find All SUCCESS');
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // DELETE favorite
  router.delete('/:id', async (req, res) => {
    // delete one product by its `id` value
    try {
      const favoriteData = await Favorite.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!favoriteData) {
        // if no product with that id exist
        res.status(404).json({ message: 'No product found with that ID.' });
        return;
      }
      // response code if delete was successful
      res.status(200).json(favoriteData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;

  // GET /favorites - retrieve all favorites
  // router.get('/favorites', async (req, res) => {
//     try {
//       const favorites = await Favorite.findAll();
//       let html = '<!DOCTYPE html>\n<html>\n<head>\n<title>My Favorites</title>\n</head>\n<body>\n<h1>My Favorites</h1>\n';
//       favorites.forEach(favorite => {
//         html += `<div class="card">
//                    <img src="${favorite.img_url}" alt="${favorite.title}">
//                    <h2>${favorite.title}</h2>
//                    <p>${favorite.description}</p>
//                  </div>\n`;
//       });
//       html += '</body>\n</html>';
//       res.send(html);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });

// there will be no serch function so we wont be searching for single posts
// GET single favorite
// router.get('/:favorite_id', (req, res) => {
//     console.log('api/favorites/:id GET endpoint reached');
// });

//we will be doing the post from the homepage
// POST favorite anime
// router.post('/', async (req, res) => {
//     console.log('/api/favorites POST endpoint reached');
// try {
//     // Make a GET request to the third-party API
//     const { data } = await axios.get('https://api.jikan.moe/v4/random/anime');
        
//     // Extract the relevant data from the API response
//      const { name, description, imgURL } = data;
        
//     // Create a new Anime object with the extracted data
//     const anime = new Favorite({ name, description, imgURL });
        
//     // Save the new Anime object to the database
//     await anime.save();
        
//     // Send a success response to the client
//     res.status(201).send({ message: 'Anime created successfully' });
//     } catch (error) {
//     res.status(400).send({ error: error.message });
//     }
// });

// we wont be updating any of the favortied items
// // UPDATE favorite
// router.put('/', (req, res) => {
//     console.log('/api/favorites PUT endpoint reached');
// });
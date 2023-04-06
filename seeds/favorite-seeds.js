const { Favorite } = require('../models');

const favoriteData = [
  {
    title: 'Osomatsu-san: Hipipo-Zoku to Kagayaku Kajitsu',
    description: 'First of two new anime installments commemorating the anime sixth anniversary.',
    img_url:'https://cdn.myanimelist.net/images/anime/1728/123861l.jpg',
  },
  {
    title: 'Futari wa Precure: Splash☆Star Movie - Tick Tack Kiki Ippatsu!',
    description: 'On their way to a singing contest, Mai and Saki meet a mysterious man looking for the oldest clock in town. It turns out that this clock is a portal to the World of Clocks, and the mysterious man is a servant of Dark Fall who wants to stop time to destroy the world. With the help of the clock spirits, Pretty Cure must fight to escape his perfect maze and start time flowing again. Takes place during the second half of Futari wa Precure Splash☆Star.',
    img_url:'https://cdn.myanimelist.net/images/anime/1640/98834l.jpg',
  },
  {
    title: 'Kuruneko 2nd Season',
    description: 'Second season of the everyday life of the lady with many cats. Based on a blog by the cat owner.\n\nActress Miki Nakatani (Ringu, Densha Otoko) will take over the series voice acting duty in second season.',
    img_url:'https://cdn.myanimelist.net/images/anime/13/24952l.jpg',
  },
  {
    title: 'Allargando The Animation',
    description: null,
    img_url:'https://cdn.myanimelist.net/images/anime/1178/103801l.jpg',
  },
];

const seedFavorite = () => Favorite.bulkCreate(favoriteData);

module.exports = seedFavorite;

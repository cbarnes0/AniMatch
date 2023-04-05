const path = require('path');
const express = require('express');
const routes = require('./controllers');
//const helpers = require('./utils/helpers');

//const sequelize = require('./config/connection');
//const SequelizeStore = require('connect-session-sequelize')(session.Store);

const getRandomAnime = require('./public/js/animeFetch')

const app = express();
const PORT = process.env.PORT || 3001;

// here for testing
getRandomAnime()

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {
//     maxAge: 300000,
//     httpOnly: true,
//     secure: false,
//     sameSite: 'strict',
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

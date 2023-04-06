const { User } = require('../models');

const userData = [
    {
        email: "peter.parker@gmail.com",
        password: "p@ssword1"
    },
    {
        email: "steve.rodgers@gmail.com",
        password: "p@ssword2"
    },
    {
        email: "thor.odinson@gmail.com",
        password: "p@ssword3"
    },
    {
        email: "tony.stark@gmail.com",
        password: "p@ssword4"
    },
    {
        email: "king.kong@gmail.com",
        password: "p@ssword5"
    },
    {
        email: "bruce.wayne@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
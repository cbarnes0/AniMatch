// Give anime unique ID
// Anime title
// Anime description
// Cover img url

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Favorite extends Model {}
Favorite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    img_url: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite',
  }
);
module.exports = Favorite;
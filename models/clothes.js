'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clothes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      this.belongsTo(models.Category, {
        foreignKey: 'categoryId'
      });
    }
  };
  Clothes.init({
    title: DataTypes.STRING,
    photo: DataTypes.TEXT,
    season: DataTypes.STRING,
    color: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Clothes',
  });
  return Clothes;
};

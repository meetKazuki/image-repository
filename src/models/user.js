const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // define association here
    }
  };

  user.init({
    first_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
  });

  return user;
};

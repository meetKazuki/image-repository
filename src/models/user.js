const { Model } = require('sequelize');
const { hashPassword, verifyPassword } = require('../helpers/auth');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // define association here
    }
  }

  user.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      username: DataTypes.STRING,
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'user',
      underscored: true,
    },
  );

  /**
   * @method beforeCreate
   * @description hook that is executed before user object is created
   */
  user.beforeCreate(async (users) => {
    users.password = await users.generatePasswordHash();
  });

  /**
   * @method beforeUpdate
   * @description hook that is executed before user object is updated
   */
  user.beforeUpdate(async (data) => {
    if (data.changed('password')) data.password = await data.generatePasswordHash();
  });

  /**
   * @method getExistingUser
   * @description return user object based on column to fetch from
   *
   * @param {String} queryString the value to get
   * @param {String} column the table column to fetch from
   *
   * @returns {Object} returns user object
   */
  user.getExistingUser = async (queryString, column = 'email') => {
    const data = await user.findOne({ where: { [column]: queryString } });
    return data;
  };

  /**
   * @function toJSON
   * @description serializer for user object
   *
   * @returns {Object} user object without password field
   */
  user.prototype.toJSON = function toJSON() {
    const { password, created_at, updated_at, ...safedata } = this.get();
    return safedata;
  };

  /**
   * @function generatePasswordHash
   * @description user method to generate password hash
   *
   * @returns {String} encoded password string
   */
  user.prototype.generatePasswordHash = async function generatePasswordHash() {
    const password = await hashPassword(this.password);
    return password;
  };

  /**
   * @function validatePassword
   * @description user method to validate password
   *
   * @param {String} password
   *
   * @returns {Boolean} true | false
   */
  user.prototype.validatePassword = function validatePassword(password) {
    return verifyPassword(this.password, password);
  };

  return user;
};

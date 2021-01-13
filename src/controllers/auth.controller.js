const { ApplicationError } = require('../helpers/error');
const { generateToken } = require('../helpers/auth');
const models = require('../models');

const { user } = models;

module.exports = {
  /**
   * @function register
   * @description controller for handling user signup
   *
   * @param {Object} request
   * @param {Object} response
   *
   * @returns {Object}
   */
  register: async (request, response) => {
    const existingEmail = await user.getExistingUser(request.body.email);
    if (existingEmail) throw new ApplicationError(409, 'email already in use');

    const existingUsername = await user.getExistingUser(
      request.body.username,
      'username',
    );
    if (existingUsername) throw new ApplicationError(409, 'username already in use');

    const newUser = await user.create(request.body);
    const token = generateToken(newUser);

    return response.status(201).json({
      status: 'success',
      message: 'user successfully registered',
      data: { user: newUser.toJSON(), token },
    });
  },

  /**
   * @function login
   * @description controller for handling user login
   *
   * @param {Object} request
   * @param {Object} response
   *
   * @returns {Object}
   */
  login: async (request, response) => {
    const { username, password } = request.body;

    const isUser = await user.findOne({ where: { username } });
    if (!isUser) throw new ApplicationError(401, 'username/password is incorrect');

    const isPassword = await isUser.validatePassword(password);
    if (!isPassword)
      throw new ApplicationError(401, 'username/password is incorrect');

    const token = generateToken(isUser);

    return response.status(200).json({
      status: 'success',
      message: 'user successfully logged-in',
      data: { user: isUser.toJSON(), token },
    });
  },
};

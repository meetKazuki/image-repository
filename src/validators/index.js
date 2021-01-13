const { check } = require('express-validator');

module.exports = {
  createUserSchema: [
    check('username')
      .not()
      .isEmpty()
      .withMessage('your username is required'),

    check('email')
      .not()
      .isEmpty()
      .withMessage('email address is required')
      .isEmail()
      .withMessage('enter a valid email address')
      .normalizeEmail({
        gmail_remove_dots: false,
      }),

    check('password')
      .not()
      .isEmpty()
      .withMessage('password is required'),
  ],

  loginSchema: [
    check('username')
      .not()
      .isEmpty()
      .withMessage('username is required'),

    check('password')
      .not()
      .isEmpty()
      .withMessage('password is required'),
  ],
};

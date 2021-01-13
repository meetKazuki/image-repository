const { Router } = require('express');
const asyncWrapper = require('../middleware/asyncWrapper');
const authController = require('../controllers/auth.controller');
const validator = require('../middleware/validator');
const validationSchemas = require('../validators');

const { createUserSchema, loginSchema } = validationSchemas;
const { register, login } = authController;

const router = Router();

router.post(
  '/register',
  validator(createUserSchema),
  asyncWrapper(register),
);

router.post(
  '/login',
  validator(loginSchema),
  asyncWrapper(login),
);

module.exports = router;

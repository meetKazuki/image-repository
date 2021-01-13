const { Router } = require('express');
const authRoute = require('./auth.route');
const imageRoute = require('./image.route');

const router = Router();

router.use('/auth', authRoute);
router.use('/images', imageRoute);

module.exports = router;

import { Router } from 'express';

const router = Router();

router.use('/search', require('./search/routes.js'));

module.exports = router;

import { Router } from 'express';

const router = Router();

/* Separating out the routes here for different domains. */
router.use('/search', require('./search/routes.js'));

module.exports = router;

import { Router } from 'express';
import controller from './controller';

const router = Router();

router.route('/').get(controller.search);
router.route('/initial').get(controller.topHeadlinesForUk);

module.exports = router;

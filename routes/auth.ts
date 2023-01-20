import express from 'express';
import controller from '../controllers/auth';
const router = express.Router();

router.get('/api/auth', controller.testGetUser);
router.post('/api/auth', controller.authenticateUser);


export = router;
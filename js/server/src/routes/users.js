import { Router } from 'express';
import { search, register } from '../controllers/UserController';
import { registerPolicy } from '../policies/UserControllerPolicy';

const router = Router();

router.get('/', (req, res) => res.send('Hello this is /users'));
router.get('/search', search);
router.post('/register', registerPolicy, register);

export default router;

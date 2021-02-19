import { Router } from 'express';
import { list, search, register } from '../controllers/UserController';
import { registerPolicy } from '../policies/UserControllerPolicy';

const router = Router();

router.get('/', list);
router.get('/search', search);
router.post('/register', registerPolicy, register);

export default router;

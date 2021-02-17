import { Router } from 'express';
import { register } from '../controllers/RegisterController';
import ReigsterControllerPolicy from '../policies/RegisterControllerPolicy';

const router = Router();

router.get('/', (req, res) => res.send('Hello this is /users'));
router.post('/register', ReigsterControllerPolicy, register);

export default router;

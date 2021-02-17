import { Router } from 'express';
import { RegisterContoller } from '../controllers';
import ReigsterControllerPolicy from '../policies/RegisterControllerPolicy';

const router = Router();

router.get('/', (req, res) => res.send('Hello this is /users'));
router.post('/register', ReigsterControllerPolicy, RegisterContoller);

export default router;

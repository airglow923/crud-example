import { Router } from 'express';
import {
  list,
  search,
  register,
  registerMultiple,
  unregister,
  unregisterAll,
  update,
} from '../controllers/UserController';
import { registerPolicy } from '../policies/UserControllerPolicy';

const router = Router();

router.get('/', list);
router.post('/', registerPolicy, registerMultiple);
router.patch('/', update);
router.delete('/', unregisterAll);
router.get('/search', search);
router.post('/register', registerPolicy, register);
router.delete('/unregister', unregister);

export default router;

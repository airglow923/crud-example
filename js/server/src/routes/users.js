import { Router } from 'express';
import {
  list,
  search,
  register,
  unregister,
  update,
  unregisterAll,
} from '../controllers/UserController';
import { registerPolicy } from '../policies/UserControllerPolicy';

const router = Router();

router.get('/', list);
router.post('/', registerPolicy, register);
router.put('/', update);
router.delete('/', unregisterAll);
router.get('/search', search);
router.delete('/unregister', unregister);

export default router;

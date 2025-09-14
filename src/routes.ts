import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';

const router = Router();

//Rota de criação de usuário
router.post('/users', new CreateUserController().handle);

export { router }
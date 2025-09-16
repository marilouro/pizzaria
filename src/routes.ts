import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import {isAuthenticated}     from './middlewares/isAuthenticated';

const router = Router();

//Rota de criação de usuário
router.post('/users', new CreateUserController().handle);

// Rota de autenticação de usuário
router.post('/session', new AuthUserController().handle);

router.get('/me', isAuthenticated, new DetailUserController().handle);

export { router }
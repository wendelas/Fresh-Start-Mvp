import { Router } from 'express';
import { ExampleController } from '../controllers/index';

const router = Router();
const exampleController = new ExampleController();

// Definindo rotas
router.get('/example', exampleController.getExample);
router.post('/example', exampleController.createExample);

// Exportando as rotas
export default router;
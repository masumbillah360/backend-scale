import { Router } from "express";
import * as todoController from '../../controller/todos'
const router = Router()

router.get('/todos', todoController.getAllTodos);
router.post('/todos', todoController.addTodo);
router.get('/todos', todoController.getTodo);
router.put('/todos', todoController.updateTodo);
router.delete('/todos', todoController.deleteTodo);


export default router;
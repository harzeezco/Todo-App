import { Router } from 'express';
import {
	getAllTodos,
	createTodo,
	updateTodo,
	deleteTodo,
	getTodo,
} from '../controllers/todo-controller.js';

const todoRouter = Router();

todoRouter.route('/').get(getAllTodos).post(createTodo);

todoRouter.route('/:id').get(getTodo).patch(updateTodo).delete(deleteTodo);

export default todoRouter;

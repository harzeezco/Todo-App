import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import todos from '../todos.js';

const app = express();

app.use(express.json());

if (process.env.TODO_ENV === 'development') {
	app.use(morgan('dev'));
}

const createTodo = (req, res) => {
	if (!req.body.todo && !req.body.isCompleted) {
		return res.status(404).json({
			status: 'fail',
			message: 'A todo and isCompleted must be specify',
		});
	}

	const id = todos[todos.length - 1].id + 1;

	const todo = { id, todo: req.body.todo, isCompleted: req.body.isCompleted };

	todos.push(todo);

	res.status(201).json({
		status: 'success',
		data: {
			todo,
		},
	});
};

const getTodos = (req, res) => {
	res.status(200).json({
		status: 'success',
		results: todos.length,
		data: {
			todos,
		},
	});
};

const updateTodo = (req, res) => {
	const id = Number(req.params.id);
	const todo = todos.find((el) => el.id === id);
	const newTodo = {
		...todo,
		isCompleted: req.body.isCompleted,
	};

	if (id > todos.length) {
		res.status(404).json({
			status: 'error',
			message: 'opps, The requested data could not be found!',
		});
	}

	res.status(201).json({
		status: 'success',
		data: {
			todo: newTodo,
		},
	});
};

app.get('/api/todos', getTodos);
app.post('/api/todos', createTodo);
app.patch('/api/todos/:id', updateTodo);

export default app;

import { Todos } from '../models/todo-model.js';
import catchAsyncErrors from '../utils/catch-async-error.js';

const createTodo = catchAsyncErrors(async (req, res, next) => {
	const todo = await Todos.create(req.body);

	res.status(201).json({
		status: 'success',
		data: {
			todo,
		},
	});
});

const getTodo = catchAsyncErrors(async (req, res) => {
	const id = req.params.id;

	const todo = await Todos.findById(id);

	res.status(201).json({
		status: 'success',
		data: {
			todo,
		},
	});
});

const getAllTodos = catchAsyncErrors(async (req, res, next) => {
	const todos = await Todos.find();

	res.status(200).json({
		status: 'success',
		results: todos.length,
		data: {
			todos,
		},
	});
});

const updateTodo = catchAsyncErrors(async (req, res, next) => {
	const id = req.params.id;

	const todo = await Todos.findByIdAndUpdate(
		id,
		{ $set: req.body },
		{ new: true }
	);

	res.status(201).json({
		status: 'success',
		data: {
			todo,
		},
	});
});

const deleteTodo = catchAsyncErrors(async (req, res, next) => {
	await Todos.findByIdAndDelete(req.params.id);

	res.status(200).json({
		status: 'success',
		message: 'The requested data has been deleted successfully',
	});
});

export { createTodo, updateTodo, deleteTodo, getAllTodos, getTodo };

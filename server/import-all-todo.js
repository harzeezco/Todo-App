import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import { Todos } from './models/todo-model.js';
import todos from '../todos.js';

const DB = process.env.DATABASE.replace(
	'<PASSWORD>',
	process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
	console.log('Server connect to mongodb database');
});

const importAllTodos = async () => {
	try {
		await Todos.insertMany(todos);
	} catch (error) {
		console.log(error);
	}

	process.exit();
};

importAllTodos();

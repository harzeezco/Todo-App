import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import todoRouter from './routes/todo-route.js';
import AppErrors from './utils/app-errors.js';
import ErrorHandler from './controllers/errors-controller.js';

const app = express();

app.use(express.json());
app.use(cors());

if (process.env.TODO_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/api/todos', todoRouter);

app.all('*', (req, res, next) => {
	next(new AppErrors(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(ErrorHandler);

export default app;

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';

const DB = process.env.DATABASE.replace(
	'<PASSWORD>',
	process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
	console.log('Server connect to mongodb database');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`server connected to port: ${port}`);
});

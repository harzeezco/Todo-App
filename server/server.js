import dotenv from 'dotenv';
dotenv.config();

import connectDB from './utils/db.js';
import app from './app.js';

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`server connected to port: ${port}`);
});

connectDB();

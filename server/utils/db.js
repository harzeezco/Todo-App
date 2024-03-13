import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const DB = process.env.DATABASE.replace(
	'<PASSWORD>',
	process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
	try {
		await mongoose.connect(DB);
		console.log('Server connect to mongodb database');
	} catch (error) {
		console.log(error);
	}
};

export default connectDB;

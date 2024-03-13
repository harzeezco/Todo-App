const ErrorHandler = (error, req, res, next) => {
	error.statusCode = error.statusCode || 500;
	error.status = error.status || 'fail';

	res.status(error.statusCode).json({
		status: error.status,
		message: error.message,
	});
};

export default ErrorHandler;

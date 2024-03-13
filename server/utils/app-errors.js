class AppErrors extends Error {
	constructor(message, statusCode) {
		super(message);

		this.message = message || 'Internal Server Error';
		this.statusCode = statusCode || 500;
		this.isOperational = true;

		Error.captureStackTrace(this, this.constructor);
	}
}

export default AppErrors;

import ErrorHandler from '../controllers/errors-controller.js';

const catchAsyncErrors = (fn) => {
	return (req, res, next) => {
		fn(req, res, next).catch((err) => next(err));
	};
};

export default catchAsyncErrors;

import { model, Schema } from 'mongoose';

const TodoSchema = new Schema(
	{
		todo: {
			type: String,
			required: [true, 'A todo must be specify'],
		},
		isCompleted: {
			type: Boolean,
			default: false,
		},
		active: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

export const Todos = model('Todos', TodoSchema);

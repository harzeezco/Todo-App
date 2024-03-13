import axios from 'axios';
import CheckBox from './CheckBox';
import InputSearch from './InputSearch';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { SERVERURL } from '../App';

const InputBox = ({
	setLists,
	lists,
	setRefresh,
	update,
	updateID,
	setUpdate,
}) => {
	const { todo } = lists;

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setLists((list) => ({ ...list, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!todo) {
			toast.error('A value must be specify');
		}

		if (!todo) {
			return;
		}

		if (update) {
			try {
				await axios
					.patch(`${SERVERURL}/api/todos/${updateID}`, lists)
					.catch((error) => toast.error(error.message));
				toast.success('Todo Updated successfully');
				setRefresh((prev) => !prev);
				setLists({ todo: '' });
				setUpdate(false);
			} catch (error) {
				toast.error(error.message);
			}
		} else {
			try {
				await axios.post(`${SERVERURL}/api/todos`, lists);
				toast.success('Todo added successfully');
				setRefresh((prev) => !prev);
				setLists({ todo: '' });
			} catch (error) {
				toast.error(error.message);
			}
		}

		console.log(lists);
	};

	return (
		<form className='input-box grid'>
			<div>
				<CheckBox
					absolute='absolute'
					onToggleItem={handleSubmit}
					setValue={setLists}
					value={todo}
				/>
				<InputSearch todo={todo} onInputChange={handleInputChange} />
			</div>

			<button className='submit-btn' type='submit' onClick={handleSubmit}>
				{update ? 'Update' : 'Add'}
			</button>
		</form>
	);
};

InputBox.propTypes = {
	updateID: PropTypes.string,
	update: PropTypes.bool,
	setRefresh: PropTypes.func,
	setUpdate: PropTypes.func,
	setLists: PropTypes.func,
	lists: PropTypes.object,
};

export default InputBox;

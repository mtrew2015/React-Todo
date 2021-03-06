import React from 'react';

const TodoForm = props => {
	return (
		<form>
			<input value={props.inputText} onChange={props.changeUserInput} />
			<button disabled={props.inputLength===0}onClick={props.addToList}>Add Item</button>
			<button onClick={props.clearList}>Clear Completed</button>
		</form>
	);
};

export default TodoForm;

import React  from 'react';

const Note = props => {
	const item = props.item;

	return (
		<div
			className="listItem"
			key={item ? item : ''}
			onClick={() => props.delete(item)}
		>
			{item ? item : ''}
		</div>
	);
};

export default Note;

import React  from 'react';

const Note = props => {
	const item = props.item;

	return (
		<div
			className="listItem"
			key={item.key}
			onClick={() => props.delete(item)}
		>
			{item.value === '' ? '' : item}
		</div>
	);
};

export default Note;

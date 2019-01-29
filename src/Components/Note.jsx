import React  from 'react';

const Note = props => {
	const {item, ...restProps} = props

	return (
		<div
		{...restProps}
			className="listItem"
			
		>
			{item || ''}
		</div>
	);
};

export default Note;

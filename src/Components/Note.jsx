import React  from 'react';
import '../CSS/..'
const Note = props => {
	const {item, ...restProps} = props

	return (
		<div 
		{...restProps}
			className="note"
			
		>
			{item || ''}
		</div>
	);
};

export default Note;

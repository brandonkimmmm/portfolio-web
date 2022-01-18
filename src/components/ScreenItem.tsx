import React, { ComponentType } from 'react';

interface Props {
	id: string;
}

const ScreenItem: ComponentType<Props> = ({ id, children }) => {
	return (
		<div id={id} className='w-full h-screen p-24 snap-start'>
			{children}
		</div>
	);
};

export default ScreenItem;

import React, { ComponentType } from 'react';

const Navbar: ComponentType = () => {
	return (
		<div className='navbar shadow-lg bg-neutral text-neutral-content fixed top-0 left-0 right-0'>
			<div className='flex-1 px-2 mx-2'>
				<a
					href='#Landing'
					className='text-lg font-bold hover:cursor-pointer'
				>
					Brandon Kim
				</a>
			</div>
			<div className='flex-none hidden px-2 mx-2 lg:flex'>
				<div className='flex items-stretch'>
					<a
						href='#About'
						className='btn btn-ghost btn-sm rounded-btn'
					>
						About
					</a>
					<a
						href='#Featured Projects'
						className='btn btn-ghost btn-sm rounded-btn'
					>
						Featured Projects
					</a>
					<a
						href='#Other Projects'
						className='btn btn-ghost btn-sm rounded-btn'
					>
						Other Projects
					</a>
					<a
						href='#Contact'
						className='btn btn-ghost btn-sm rounded-btn'
					>
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

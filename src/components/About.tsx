import React, { ComponentType } from 'react';
import { User } from '../models';
import ScreenItem from './ScreenItem';

interface Props {
	user: User;
}

const About: ComponentType<Props> = ({ user }) => {
	return (
		<ScreenItem id='About'>
			<div className='flex flex-col w-full h-full mx-auto justify-center space-y-4 px-32'>
				<div className='font-bold text-4xl'>About Me</div>
				<div className='flex space-x-7'>
					<div className='text-md'>{user.about}</div>
					<img
						className='w-96 h-96 rounded-lg'
						src={user.avatar_url}
					/>
				</div>
			</div>
		</ScreenItem>
	);
};

export default About;

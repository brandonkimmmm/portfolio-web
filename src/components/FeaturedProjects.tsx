import React, { ComponentType } from 'react';
import { Project } from '../models';
import ScreenItem from './ScreenItem';
import { getLogo } from '../utils/logos';
import { pickBy } from 'lodash';

interface Props {
	projects: Project[];
}

const FeaturedProjects: ComponentType<Props> = ({ projects }) => {
	return (
		<ScreenItem id='Featured Projects'>
			<div className='flex flex-col w-full h-full justify-center mx-auto space-y-4'>
				<div className='font-bold text-4xl'>Featured Projects</div>
				<div className='flex flex-col jusitfy-center space-y-4'>
					{projects.map((project, i) => (
						<div
							key={i}
							className={`flex w-full mx-auto space-x-4 align-center ${
								i === 1 ? 'flex-row-reverse' : ''
							}`}
						>
							<img
								src={project.image_url}
								className='h-67 w-96 rounded-md'
							/>
							<div className='flex flex-col w-full h-full justify-center mx-auto space-y-4'>
								<div>{project.name}</div>
								<div>{project.description}</div>
								<div className='flex space-x-4'>
									{project.technologies?.map((tech, i) => (
										<img
											key={i}
											className='w-11 h-11'
											src={tech.logo_url}
										/>
									))}
								</div>
								<div className='flex space-x-4'>
									{Object.entries(
										pickBy(
											project.link_urls,
											(value) => !!value
										)
									).map(([key, value], i) => (
										<img
											key={i}
											className='w-11 h-11'
											src={getLogo(key)}
										/>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</ScreenItem>
	);
};

export default FeaturedProjects;

import React, { ComponentType } from 'react';
import { Project } from '../../models';
import { getLogo } from '../../utils/logos';
import { pickBy } from 'lodash';

interface Props {
	projects: Project[];
}

const FeaturedProjects: ComponentType<Props> = ({ projects }) => {
	return (
		<div className='flex flex-col w-full h-full justify-center mx-auto space-y-10 px-24'>
			<div className='font-bold text-4xl'>Featured Projects</div>
			<div className='flex flex-col jusitfy-center space-y-24'>
				{projects.map((project, i) => (
					<div
						key={i}
						className={`flex flex-row w-full mx-auto space-x-4 align-center ${
							i === 1 ? 'flex-row-reverse' : ''
						}`}
					>
						<div className='w-11/12'>
							<img
								src={project.image_url}
								className='w-full rounded-md'
							/>
						</div>
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
	);
};

export default FeaturedProjects;

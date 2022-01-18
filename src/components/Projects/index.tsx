import React, { ComponentType } from 'react';
import { Project } from '../../models';
import FeaturedProjects from './FeaturedProjects';
import AdditionalProjects from './AdditionalProjects';

interface Props {
	projects: Project[];
}

const Projects: ComponentType<Props> = ({ projects }) => {
	return (
		<div
			id='Projects'
			className='w-full p-24 h-full flex flex-col space-y-64'
		>
			<FeaturedProjects projects={projects.slice(0, 3)} />
			<AdditionalProjects projects={projects.slice(2)} />
		</div>
	);
};

export default Projects;

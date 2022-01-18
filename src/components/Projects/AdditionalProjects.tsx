import React, { ComponentType, useState } from 'react';
import { Project } from '../../models';
import { getLogo } from '../../utils/logos';
import { pickBy } from 'lodash';

interface Props {
	projects: Project[];
}

const AdditionalProjects: ComponentType<Props> = ({ projects }) => {
	const [showMore, setShowMore] = useState<boolean>(false);

	return (
		<div className='flex flex-col w-full h-full justify-center mx-auto space-y-4'>
			<div className='font-bold text-4xl'>Other Projects</div>
			<div className='grid grid-cols-3 gap-4'>
				{projects.map((project, i) => (
					<div
						key={i}
						className={`bg-red-400 flex flex-col w-full h-full ${
							i >= 6 && !showMore ? 'hidden' : ''
						}`}
					>
						<div className='flex w-full'>
							<img src='https://img.icons8.com/ios/50/000000/folder-invoices--v1.png' />
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
					</div>
				))}
			</div>
			{projects.length > 6 ? (
				<div
					className='btn btn-primary'
					onClick={() => setShowMore(!showMore)}
				>
					{showMore ? 'Show Less' : 'Show More'}
				</div>
			) : null}
		</div>
	);
};

export default AdditionalProjects;

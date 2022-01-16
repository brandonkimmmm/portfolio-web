import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Project, User } from '../models';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import OtherProjects from '../components/OtherProjects';
import Contact from '../components/Contact';

const IndexPage = () => {
	const [user, setUser] = useState<User | null>(null);
	const [projects, setProjects] = useState<Project[] | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const userData = await axios.get('http://localhost/api/user');
				const projectData = await axios.get(
					'http://localhost/api/projects'
				);
				setUser(userData.data);
				setProjects(projectData.data);
			} catch (err) {
				alert(
					err instanceof Error ? err.message : 'Something went wrong'
				);
			}
		})();
	}, []);

	return (
		<main>
			<title>Home Page</title>
			{user && projects ? (
				<>
					<Navbar />
					<div className='overflow-scroll snap-y snap-mandatory h-screen'>
						<Landing user={user} />
						<About user={user} />
						<FeaturedProjects projects={projects.slice(0, 3)} />
						<OtherProjects projects={projects.slice(3)} />
						<Contact user={user} />
					</div>
				</>
			) : (
				<div>Loading...</div>
			)}
		</main>
	);
};

export default IndexPage;

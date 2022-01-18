import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Project, User } from '../models';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

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
					<div className='h-full px-6'>
						<Landing user={user} />
						<About user={user} />
						<Projects projects={projects} />
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

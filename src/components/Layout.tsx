import React, { ComponentType } from 'react';
import Navbar from './Navbar';

const Layout: ComponentType = ({ children }) => {
	return (
		<div>
			<head>
				<title>{process.env.FULL_NAME}</title>
			</head>
			<main>
				<Navbar />
				{children}
			</main>
		</div>
	);
};

export default Layout;

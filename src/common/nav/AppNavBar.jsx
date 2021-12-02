import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap';
export const AppNavBar = ({ setLoggedIn }) => {
	return (
		<Navbar>
			<Container>
				<Navbar.Brand>
					<h1>PCO-UI</h1>
				</Navbar.Brand>
				<Button
					onClick={() => {
						setLoggedIn(false);
					}}
				>
					SignOut
				</Button>
			</Container>
		</Navbar>
	);
};

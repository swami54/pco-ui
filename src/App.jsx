import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddSession } from './js/widgets/add-session/AddSession';
import { DeleteSession } from './js/widgets/delete-session/DeleteSession';
import { MainPage } from './js/widgets/main-page/MainPage';
import { ModifySession } from './js/widgets/modify-session/ModifySession';
import { ViewSession } from './js/widgets/view-session/ViewSession';
import { Button, Container, Form, Navbar } from 'react-bootstrap';

export const App = () => {
	const [loggedIn, setLoggedIn] = useState(true);

	return (
		<BrowserRouter>
			<Container>
				{loggedIn ? (
					<AppRoutes setLoggedIn={setLoggedIn} />
				) : (
					<Login setLoggedIn={setLoggedIn} />
				)}
			</Container>
		</BrowserRouter>
	);
};

const AppRoutes = ({ setLoggedIn }) => {
	return (
		<>
			<AppNavBar setLoggedIn={setLoggedIn} />
			<Container>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/add' element={<AddSession />} />
					<Route path='/modify/:id' element={<ModifySession />} />
					<Route path='/view/:id' element={<ViewSession />} />
					<Route path='/delete/:id' element={<DeleteSession />} />
				</Routes>
			</Container>
		</>
	);
};
const AppNavBar = ({ setLoggedIn }) => {
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
const Login = ({ setLoggedIn }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<Container className='LoginContainer'>
			<h1>PCO UI</h1>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					console.log({ email, password });
					setLoggedIn(true);
				}}
			>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						defaultValue={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						required
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						defaultValue={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						minLength={8}
						required
					/>
				</Form.Group>
				<Button type='submit'>Login</Button>
			</Form>
		</Container>
	);
};

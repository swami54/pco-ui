import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddSession } from './features/AddSession';
import { DeleteSession } from './features/DeleteSession';
import { MainPage } from './features/MainPage';
import { ModifySession } from './features/ModifySession';
import { ViewSession } from './features/ViewSession';
import { Login } from './features/Login';
import { AppNavBar } from './components/nav/AppNavBar';
import { Container } from 'react-bootstrap';

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

export const AppRoutes = ({ setLoggedIn }) => {
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

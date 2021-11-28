import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AddSession } from './features/add-session/AddSession';
import { DeleteSession } from './features/delete-session/DeleteSession';
import { MainPage } from './features/main/MainPage';
import { ModifySession } from './features/modify-session/ModifySession';
import { ViewSession } from './features/view-session/ViewSession';

export class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/add/:id' element={<AddSession />} />
					<Route path='/modify/:id' element={<ModifySession />} />
					<Route path='/view/:id' element={<ViewSession />} />
					<Route path='/delete/:id' element={<DeleteSession />} />
				</Routes>
			</BrowserRouter>
		);
	}
}

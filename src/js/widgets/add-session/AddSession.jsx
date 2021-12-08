import React from 'react';
import { SessionForm } from '../../common/SessionForm.jsx';

export function AddSession() {
	const onSubmit = (e, data) => {
		e.preventDefault();
		console.log(data);
	};
	return <SessionForm isAdd title='Add New Session' onSubmit={onSubmit} />;
}

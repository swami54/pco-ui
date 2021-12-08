import React from 'react';
import { SessionForm } from '../../common/SessionForm.jsx';

export function ModifySession() {
	const onSubmit = (e, data) => {
		e.preventDefault();
		console.log({ data });
	};
	return <SessionForm isEdit title={'Update Session'} onSubmit={onSubmit} />;
}

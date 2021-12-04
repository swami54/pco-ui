import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { ViewSessionData } from '../../common/ViewSessionData';
import { fetchSessionData } from '../../services/fetchSessionData';

export function ViewSession() {
	const [sessionData, setSessionData] = useState(undefined);

	useEffect(() => {
		fetchSessionData('id').then((e) => {
			setSessionData(e);
		});
	}, []);

	if (!sessionData) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<Row>
				<h3 className='mt-2 mb-4'>Delete Session</h3>
			</Row>
			<ViewSessionData sessionData={sessionData} />
		</>
	);
}

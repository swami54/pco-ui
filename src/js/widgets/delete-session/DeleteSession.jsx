import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ViewSessionData } from '../../common/ViewSessionData';
import { fetchSessionData } from '../../services/fetchSessionData';

export function DeleteSession() {
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
		<Container>
			<Row>
				<h3 className='mt-2 mb-4'>Delete Session</h3>
			</Row>
			<ViewSessionData sessionData={sessionData} />
			<Row className='mt-4'>
				<Col className='flex-end'>
					<Button
						onClick={() => {
							console.log('delete clicked');
						}}
					>
						Delete Confirm
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

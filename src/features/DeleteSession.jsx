import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ViewSessionData } from '../components/ViewSessionData';
import { getSampleSessionData } from '../utils';

export function DeleteSession() {
	const [sessionData, setSessionData] = useState(undefined);
	const params = useParams();

	useEffect(() => {
		console.log(params);
		setSessionData(getSampleSessionData());
	}, []);
	if (!sessionData) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<Row>
				<h3 className="mt-2 mb-4">Delete Session</h3>
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
		</>
	);
}

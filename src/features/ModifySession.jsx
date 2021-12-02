import { useEffect, useState } from 'react';
import { Tabs, Tab, Row, Col, FormGroup, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { AddIcon } from '../assets/AddIcon.jsx';
import { DeleteIcon } from '../assets/DeleteIcon.jsx';
import { v4 as uuidv4 } from 'uuid';
import { getSampleSessionData } from '../utils';

export function ModifySession() {
	const [sessionData, setSessionData] = useState();
	const [key, setKey] = useState('');

	const params = useParams();
	useEffect(() => {
		const data = getSampleSessionData();
		setSessionData(data);
		if (data.captureSets && data.captureSets.length > 0)
			setKey(data.captureSets[0].id);
	}, []);

	if (!sessionData) {
		return <div>Loading...</div>;
	}
	const handleChange = (data) => {
		const updateSessionData = { ...sessionData, ...data };
		setSessionData(updateSessionData);
	};
	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
				console.log(sessionData);
			}}
		>
			<Row className='SectionContainer'>
				<Col>
					<FormGroup>
						<Form.Label>Account ID</Form.Label>
						<Form.Control
							defaultValue={sessionData.accountId}
							onChange={(e) => {
								handleChange({ accountId: e.target.value });
							}}
						/>
					</FormGroup>
				</Col>
				<Col>
					<FormGroup>
						<Form.Label>VPC ID</Form.Label>
						<Form.Control
							defaultValue={sessionData.vpc}
							onChange={(e) => {
								handleChange({ vpc: e.target.value });
							}}
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row className='mt-2'>
				<Col className='flex-end'>
					<Button
						onClick={() => {
							const captureSets = sessionData.captureSets;
							const newCaptureSet = {
								ec2Instance: '',
								remoteIps: '',
								requestor: '',
								id: uuidv4(),
							};
							captureSets.push(newCaptureSet);
							if (captureSets.length === 1) {
								setKey(newCaptureSet.id);
							}
							handleChange({ captureSets });
						}}
					>
						<AddIcon className='Icon' />
					</Button>
				</Col>
			</Row>
			{sessionData.captureSets.length > 0 && (
				<Row className='mt-2 SectionContainer'>
					<Col>
						<Tabs
							id='Captured Session'
							activeKey={key}
							onSelect={(k) => setKey(k)}
						>
							{sessionData.captureSets.map((captureSet, index) => {
								return (
									<Tab
										eventKey={captureSet.id}
										key={captureSet.id}
										title={`Capture Set ${index + 1}`}
									>
										<FormGroup>
											<Form.Label>EC2 Instance</Form.Label>
											<Form.Control
												defaultValue={captureSet.ec2Instance}
												onChange={(e) => {
													const captureSets = sessionData.captureSets;
													captureSets[index].ec2Instance = e.target.value;
													handleChange({ captureSets });
												}}
											/>
										</FormGroup>
										<FormGroup>
											<Form.Label>Remote Ips</Form.Label>
											<Form.Control
												defaultValue={captureSet.remoteIps}
												onChange={(e) => {
													const captureSets = sessionData.captureSets;
													captureSets[index].remoteIps = e.target.value;
													handleChange({ captureSets });
												}}
											/>
										</FormGroup>

										<FormGroup>
											<Form.Label>Requestor</Form.Label>
											<Form.Control
												defaultValue={captureSet.requestor}
												onChange={(e) => {
													const captureSets = sessionData.captureSets;
													captureSets[index].requestor = e.target.value;
													handleChange({ captureSets });
												}}
											/>
										</FormGroup>
										<Row>
											<Col className='mt-2 flex-end'>
												<Button
													onClick={() => {
														const captureSets = sessionData.captureSets.filter(
															(e) => e.id !== captureSet.id
														);
														console.log({ captureSets });
														if (sessionData.captureSets.length !== 1) {
															if (index === 0) {
																setKey(sessionData.captureSets[index + 1].id);
															} else {
																setKey(sessionData.captureSets[index - 1].id);
															}
														}
														handleChange({ captureSets });
													}}
												>
													<DeleteIcon className='Icon' />
												</Button>
											</Col>
										</Row>
									</Tab>
								);
							})}
						</Tabs>
					</Col>
				</Row>
			)}
			<Row>
				<Col className='flex-end'>
					<Button className='mt-2' type='submit'>
						Submit
					</Button>
				</Col>
			</Row>
		</Form>
	);
}

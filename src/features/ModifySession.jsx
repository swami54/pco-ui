import { useEffect, useState } from 'react';
import { Tabs, Tab, Row, Col, FormGroup, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AddIcon from '../assets/add.svg';
const sessionDataC = {
	accountId: '123123(MyApp Account)',
	vpc: 'vpc-123123123',
	captureSets: [
		{
			ec2Instance: 'i-123123',
			remoteIps: '10.12.12.12',
			requestor: 'user1',
		},
		{
			ec2Instance: 'i-12312312323',
			remoteIps: '10.12.212.12',
			requestor: 'user21',
		},
		{
			ec2Instance: 'i-1231ss2312323',
			remoteIps: '10.12.212.12',
			requestor: 'user21',
		},
	],
};

export function ModifySession() {
	const [sessionData, setSessionData] = useState(sessionDataC);

	const params = useParams();
	useEffect(() => {
		console.log(params);
	});

	useEffect(() => {
		console.log(sessionData);
	}, [sessionData]);

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
			<Row className='mb-4'>
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
			<Row className='mb-4'>
				<Col className='AddCaptureSet'>
					<Button
						onClick={() => {
							const captureSets = sessionData.captureSets;
							captureSets.push({
								ec2Instance: '',
								remoteIps: '',
								requestor: '',
							});
							handleChange({ captureSets });
						}}
					>
						<img className="AddIcon" src={AddIcon} alt='Add' />
					</Button>
				</Col>
			</Row>
			<Tabs id='Captured Session' defaultActiveKey='c0'>
				{sessionData.captureSets.map((captureSet, index) => {
					return (
						<Tab
							eventKey={`c${index}`}
							key={`c${index}`}
							title={`Capture Set ${index + 1}`}
							className='mt-4'
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
						</Tab>
					);
				})}
			</Tabs>
			<Button type='submit'>Submit</Button>
		</Form>
	);
}

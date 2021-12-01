import { useEffect, useState } from 'react';
import {
	Tabs,
	Tab,
	Row,
	Col,
	FormGroup,
	Form,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

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

export function ViewSession() {
	const [sessionData, setSessionData] = useState(undefined);

	const params = useParams();

	useEffect(() => {
		console.log(params);
		setSessionData(sessionDataC);
	}, [sessionData]);

	if (!sessionData) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<Row className='mb-4'>
				<Col>
					<FormGroup>
						<Form.Label>Account ID</Form.Label>
						<Form.Control readOnly defaultValue={sessionData.accountId} />
					</FormGroup>
				</Col>
				<Col>
					<FormGroup>
						<Form.Label>VPC ID</Form.Label>
						<Form.Control readOnly defaultValue={sessionData.vpc} />
					</FormGroup>
				</Col>
			</Row>
			<Tabs id='Captured Session' defaultActiveKey='c0'>
				{sessionData.captureSets.map((captureSet, index) => {
					return (
						<Tab
							eventKey={`c${index}`}
							key={captureSet.ec2Instance}
							title={`Capture Set ${index + 1}`}
							className='mt-4'
						>
							<FormGroup>
								<Form.Label>EC2 Instance</Form.Label>
								<Form.Control readOnly defaultValue={captureSet.ec2Instance} />
							</FormGroup>
							<FormGroup>
								<Form.Label>Remote Ips</Form.Label>
								<Form.Control readOnly defaultValue={captureSet.remoteIps} />
							</FormGroup>

							<FormGroup>
								<Form.Label>Requestor</Form.Label>
								<Form.Control readOnly defaultValue={captureSet.requestor} />
							</FormGroup>
						</Tab>
					);
				})}
			</Tabs>
		</>
	);
}

import {
	Tabs,
	Tab,
	Row,
	Col,
	FormGroup,
	Form,
	Container,
} from 'react-bootstrap';

export const ViewSessionData = ({ sessionData }) => {
	return (
		<>
			<Row className='SectionContainer'>
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
			<Row className='mt-2 SectionContainer'>
				<Col>
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
										<Form.Control
											readOnly
											defaultValue={captureSet.ec2Instance}
										/>
									</FormGroup>
									<FormGroup>
										<Form.Label>Remote Ips</Form.Label>
										<Form.Control
											readOnly
											defaultValue={captureSet.remoteIps}
										/>
									</FormGroup>

									<FormGroup>
										<Form.Label>Requestor</Form.Label>
										<Form.Control
											readOnly
											defaultValue={captureSet.requestor}
										/>
									</FormGroup>
								</Tab>
							);
						})}
					</Tabs>
				</Col>
			</Row>
		</>
	);
};

import React from 'react';
import {
	Tabs,
	Tab,
	Row,
	Col,
	FormGroup,
	Form,
	Container,
} from 'react-bootstrap';
import Select from 'react-select';
import { getReactSelectOptions } from '../util/utils';
export const ViewSessionData = ({ sessionData }) => {
	return (
		<Container>
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
									<FormGroup readOnly>
										<Form.Label>EC2 Instance</Form.Label>
										<Select
											defaultValue={getReactSelectOptions(
												captureSet.ec2Instance
											)}
											readOnly
											isMulti
											isDisabled={true}
										/>
									</FormGroup>
									<FormGroup readOnly>
										<Form.Label>Remote Ips</Form.Label>
										<Select
											defaultValue={getReactSelectOptions(
												captureSet.remoteIps
											)}
											readOnly
											isMulti
											isDisabled={true}
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
		</Container>
	);
};

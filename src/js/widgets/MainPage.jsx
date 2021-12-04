import React from 'react';
import { Table, Row, Col, Container } from 'react-bootstrap';
import { DeleteIcon } from '../assets/DeleteIcon.jsx';
import { AppNavLink } from '../common/NavLink.jsx';

const tableData = [
	{
		sessionId: 'session-123',
		account: '123123',
		vpc: 'vpc-123123',
		status: 'Active',
		date: '24/02/2000',
		requestor: 'ss3',
	},
	{
		sessionId: 'session-321',
		account: '123123',
		vpc: 'vpc-123123',
		status: 'Active',
		date: '24/02/2000',
		requestor: 'ss3',
	},
	{
		sessionId: 'session-322',
		account: '123123',
		vpc: 'vpc-123123',
		status: 'Active',
		date: '24/02/2000',
		requestor: 'ss3',
	},
];
const tableHeaders = [
	'Session ID',
	'Account',
	'VPC',
	'Status',
	'Date',
	'Requestor',
	'Packet download URL',
	'Modify',
	'Remove',
];

export const MainPage = () => {
	return (
		<Container>
			<Row className='mb-4 mt-2'>
				<Col className='justify-between'>
					<h3>Current Sessions</h3>
					<AppNavLink to='/add' className='btn btn-primary'>
						Setup Packet Capture
					</AppNavLink>
				</Col>
			</Row>
			<Table>
				<thead>
					<tr>
						{tableHeaders.map((tableHeader) => {
							return <th key={tableHeader}>{tableHeader}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{tableData.map((sessionData) => {
						return (
							<tr key={sessionData.sessionId}>
								<td>
									<AppNavLink to={`/view/${sessionData.sessionId}`}>
										{sessionData.sessionId}
									</AppNavLink>
								</td>
								<td>{sessionData.account}</td>
								<td>{sessionData.vpc}</td>
								<td>{sessionData.status}</td>
								<td>{sessionData.date}</td>
								<td>{sessionData.requestor}</td>
								<td>
									<a
										className='btn btn-primary'
										href='https://download.pcap.a.intuit.net'
									>
										cClear
									</a>
								</td>
								<td>
									<AppNavLink
										className='btn btn-primary'
										to={`/modify/${sessionData.sessionId}`}
									>
										Modify
									</AppNavLink>
								</td>
								<td>
									<AppNavLink
										to={`/delete/${sessionData.sessionId}`}
										className=' btn btn-primary'
									>
										<DeleteIcon className='Icon' />
									</AppNavLink>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</Container>
	);
};

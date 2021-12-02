import { Link } from 'react-router-dom';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { DeleteIcon } from '../assets/DeleteIcon.jsx';

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
		<>
			<Row className='mb-4 mt-2'>
				<Col className='justify-between'>
					<h3>Current Sessions</h3>
					<Link to='/add' className='btn btn-primary'>
						Setup Packet Capture
					</Link>
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
									<Link to={`/view/${sessionData.sessionId}`}>
										{sessionData.sessionId}
									</Link>
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
									<Link
										className='btn btn-primary'
										to={`/modify/${sessionData.sessionId}`}
									>
										Modify
									</Link>
								</td>
								<td>
									<Link
										to={`/delete/${sessionData.sessionId}`}
										className=' btn btn-primary'
									>
										<DeleteIcon className='Icon' />
									</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</>
	);
};

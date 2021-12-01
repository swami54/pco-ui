import { Link } from 'react-router-dom';
import { Table, Button, Row, Col } from 'react-bootstrap';
import deleteIcon from '../assets/delete.svg';

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
			<Row>
				<Col>
					<label>Current Sessions</label>
				</Col>
				<Col xs={{ offset: 8 }}>
					<Button
						onClick={() => {
							console.log('Setup Packet Capture clicked');
						}}
					>
						Setup Packet Capture
					</Button>
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
									<a href='https://download.pcap.a.intuit.net'>cClear</a>
								</td>
								<td>
									<Link to={`/modify/${sessionData.sessionId}`}>Modify</Link>
								</td>
								<td>
									<Link
										to={`/delete/${sessionData.sessionId}`}
										className='DeleteButton'
									>
										<img
											width='24'
											height='24'
											src={deleteIcon}
											alt={'Remove'}
										/>
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

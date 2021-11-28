import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

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

export class MainPage extends Component {
	render() {
		return (
			<div className='Container'>
				<div className='TopContainer'>
					<label>Current Sessions</label>
					<button
						onClick={() => {
							console.log('Setup Packet Capture clicked');
						}}
					>
						Setup Packet Capture
					</button>
				</div>
				<div className='TableWrapper'>
					<table className='Table'>
						<thead className='TableHeaders'>
							<tr>
								{tableHeaders.map((tableHeader) => {
									return (
										<th className='TableHeader' key={tableHeader}>
											{tableHeader}
										</th>
									);
								})}
							</tr>
						</thead>
						<tbody>
							{tableData.map((sessionData) => {
								return (
									<tr className='TableRow' key={sessionData.sessionId}>
										<td className='TableData'>
											<Link to={`/view/${sessionData.sessionId}`}>{sessionData.sessionId}</Link>
										</td>
										<td className='TableData'>{sessionData.account}</td>
										<td className='TableData'>{sessionData.vpc}</td>
										<td className='TableData'>{sessionData.status}</td>
										<td className='TableData'>{sessionData.date}</td>
										<td className='TableData'>{sessionData.requestor}</td>
										<td className='TableData'>
											<a href='https://download.pcap.a.intuit.net'>cClear</a>
										</td>
										<td className='TableData'>
											<Link to={`/modify/${sessionData.sessionId}`}>
												Modify
											</Link>
										</td>
										<td className='TableData'>
											<Link to={`/delete/${sessionData.sessionId}`}>
												Remove
											</Link>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

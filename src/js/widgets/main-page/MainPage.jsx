import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Container } from 'react-bootstrap';
import { DeleteIcon } from '../../../assets/DeleteIcon.jsx';
import { fetchSessionList } from '../../services/fetchSessionList.js';
import { AppNavLink } from '../../common/NavLink.jsx';

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
	const [sessionList, setSessionList] = useState([]);
	useEffect(() => {
		fetchSessionList().then((e) => {
			setSessionList(e);
		});
	}, []);

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
			{sessionList.length === 0 ? (
				<h2>Loading...</h2>
			) : (
				<SessionsTable sessionList={sessionList} />
			)}
		</Container>
	);
};
const SessionsTable = ({ sessionList }) => {
	return (
		<Table>
			<SessionsTableHeaders />
			<tbody>
				{sessionList.map((sessionData) => {
					return (
						<tr key={sessionData.id}>
							<SessionsTableRow sessionData={sessionData} />
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};
const SessionsTableHeaders = () => {
	return (
		<thead>
			<tr>
				{tableHeaders.map((tableHeader) => {
					return <th key={tableHeader}>{tableHeader}</th>;
				})}
			</tr>
		</thead>
	);
};
const SessionsTableRow = ({ sessionData }) => {
	return (
		<>
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
		</>
	);
};

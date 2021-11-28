import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ViewSession.css';

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
	],
};

export function ViewSession() {
	const [sessionData, setSessionData] = useState(undefined);
	const [captureSet, setCaptureSet] = useState(0);

	const params = useParams();

	useEffect(() => {
		console.log(params);
		setSessionData(sessionDataC);
	});

	if (!sessionData) {
		return <div>Loading...</div>;
	}
	return (
		<div className='Container'>
			<div className='TopContainer'>
				<label>Account ID</label>
				<span>{sessionData.accountId}</span>
				<label>VPC ID</label>
				<span>{sessionData.vpc}</span>
			</div>
			<div className='TabHeaders'>
				{sessionData.captureSets.map((e, index) => {
					return (
						<button
							onClick={() => {
								setCaptureSet(index);
							}}
							key={e.ec2Instance}
						>
							Capture Set {index + 1}
						</button>
					);
				})}
			</div>
			<div className=''>
				<p>EC2 Instance</p>
				<span>{sessionData.captureSets[captureSet].ec2Instance}</span>
				<p>Remte Ips</p>
				<span>{sessionData.captureSets[captureSet].remoteIps}</span>
				<p>Requestor</p>
				<span>{sessionData.captureSets[captureSet].requestor}</span>
			</div>
		</div>
	);
}

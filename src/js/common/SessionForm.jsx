import React, { useEffect, useState } from 'react';
import {
	Tabs,
	Tab,
	Row,
	Col,
	FormGroup,
	Form,
	Button,
	Container,
} from 'react-bootstrap';
import { fetchEc2InstanceList } from '../services/fetchEc2InstanceList';
import { fetchSessionData } from '../services/fetchSessionData';
import { AddIcon } from '../../assets/AddIcon.jsx';
import { DeleteIcon } from '../../assets/DeleteIcon.jsx';
import {
	getReactSelectOptions,
	uuid,
	getNewSessionData,
} from '../util/utils';
import Select from 'react-select';

export const SessionForm = ({
	isDelete,
	isAdd,
	isEdit,
	isView,
	title,
	onSubmit,
}) => {
	const [sessionData, setSessionData] = useState();
	const [key, setKey] = useState('');
	const [ec2InstanceList, setEc2InstanceList] = useState([]);
	const isReadOnly = isDelete || isView;

	useEffect(() => {
		if (isAdd) {
			const data = getNewSessionData();
			setSessionData(data);
			setKey(data.captureSets[0].id);
		} else {
			fetchSessionData('sessionId').then((data) => {
				setSessionData(data);
				if (data.captureSets && data.captureSets.length > 0)
					setKey(data.captureSets[0].id);
			});
		}
		fetchEc2InstanceList().then((e) => {
			setEc2InstanceList(getReactSelectOptions(e));
		});
	}, [isAdd]);
	const handleChange = (data) => {
		const updateSessionData = { ...sessionData, ...data };
		setSessionData(updateSessionData);
	};
	const handleDeleteCaptureSet = (index) => {
		const captureSets = sessionData.captureSets.filter(
			(item) => item.id !== sessionData.captureSets[index].id
		);
		console.log({ captureSets });
		if (sessionData.captureSets.length !== 1) {
			if (index === 0) {
				setKey(sessionData.captureSets[index + 1].id);
			} else {
				setKey(sessionData.captureSets[index - 1].id);
			}
		}
		handleChange({ captureSets });
	};
	const handleAddCaptureSet = () => {
		const captureSets = sessionData.captureSets;
		const newCaptureSet = {
			ec2Instance: [],
			remoteIps: [],
			requestor: '',
			id: uuid(),
		};
		captureSets.push(newCaptureSet);
		if (captureSets.length === 1) {
			setKey(newCaptureSet.id);
		}
		handleChange({ captureSets });
	};
	if (!sessionData) {
		return <div>Loading...</div>;
	}
	
	return (
		<Container>
			<Form onSubmit={(e) => onSubmit(e, sessionData)} readOnly={isReadOnly}>
				<h3 className='mt-2 mb-4'>{title}</h3>
				<Row className='SectionContainer'>
					<FormInput
						as={Col}
						label={'Account ID'}
						defaultValue={sessionData.accountId}
						onChange={(e) => handleChange({ accountId: e.target.value })}
						readOnly={isReadOnly}
					/>
					<FormInput
						as={Col}
						label={'VPC ID'}
						defaultValue={sessionData.vpc}
						onChange={(e) => handleChange({ vpc: e.target.value })}
						readOnly={isReadOnly}
					/>
				</Row>
				{(isAdd || isEdit) && (
					<RowEndButton onClick={handleAddCaptureSet}>
						<AddIcon className='Icon' />
					</RowEndButton>
				)}
				{sessionData.captureSets.length > 0 && (
					<Row className='mt-2 SectionContainer'>
						<Col>
							<Tabs
								id='Captured Session'
								activeKey={key}
								onSelect={(k) => setKey(k)}
							>
								{sessionData.captureSets.map((captureSet, index) => {
									return (
										<Tab
											eventKey={captureSet.id}
											key={captureSet.id}
											title={`Capture Set ${index + 1}`}
										>
											<FormGroup className='mt-2'>
												<Form.Label>EC2 Instance</Form.Label>
												<Select
													options={ec2InstanceList}
													defaultValue={captureSet.ec2Instance.map((e) => {
														return { value: e, label: e };
													})}
													isMulti
													onChange={(values) => {
														const captureSets = sessionData.captureSets;
														captureSets[index].ec2Instance = values;
														handleChange({ captureSets });
													}}
													isDisabled={isReadOnly}
												/>
											</FormGroup>
											<FormGroup className='mt-2'>
												<Form.Label>Remote Ips</Form.Label>
												<Select
													options={[]}
													defaultValue={getReactSelectOptions(
														captureSet.remoteIps
													)}
													isMulti
													onChange={(values) => {
														const captureSets = sessionData.captureSets;
														captureSets[index].remoteIps = values;
														handleChange({ captureSets });
													}}
													isDisabled={isReadOnly}
												/>
											</FormGroup>
											<FormInput
												className='mt-2'
												label='Requestor'
												defaultValue={captureSet.requestor}
												onChange={(e) => {
													const captureSets = sessionData.captureSets;
													captureSets[index].requestor = e.target.value;
													handleChange({ captureSets });
												}}
												readOnly={isReadOnly}
											/>
											<RowEndButton
												show={isAdd || isEdit}
												onClick={() => handleDeleteCaptureSet(index)}
											>
												<DeleteIcon className='Icon' />
											</RowEndButton>
										</Tab>
									);
								})}
							</Tabs>
						</Col>
					</Row>
				)}
				<RowEndButton type='submit' show={!isView}>
					{isAdd || isEdit ? 'Submit' : 'Confirm Delete'}
				</RowEndButton>
			</Form>
		</Container>
	);
};

const RowEndButton = ({ show, onClick, type, children }) => {
	if (!show) return null;
	return (
		<Row>
			<Col className='mt-2 flex-end'>
				<Button onClick={onClick} type={type}>
					{children}
				</Button>
			</Col>
		</Row>
	);
};

const FormInput = ({
	className,
	as,
	defaultValue,
	onChange,
	readOnly,
	label,
}) => {
	return (
		<FormGroup as={as} className={className}>
			<Form.Label>{label}</Form.Label>
			<Form.Control
				defaultValue={defaultValue}
				onChange={onChange}
				readOnly={readOnly}
			/>
		</FormGroup>
	);
};

import { v4 as uuidv4 } from 'uuid';
const sampleSessionData = {
	accountId: '123123(MyApp Account)',
	vpc: 'vpc-123123123',
	captureSets: [
		{
			ec2Instance: 'i-123123',
			remoteIps: '10.12.12.12',
			requestor: 'user1',
			id: uuidv4(),
		},
		{
			ec2Instance: 'i-12312312323',
			remoteIps: '10.12.212.12',
			requestor: 'user21',
			id: uuidv4(),
		},
		{
			ec2Instance: 'i-1231ss2312323',
			remoteIps: '10.12.212.12',
			requestor: 'user21',
			id: uuidv4(),
		},
	],
};
export const getSampleSessionData = () =>
	JSON.parse(JSON.stringify(sampleSessionData));

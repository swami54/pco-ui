import { uuid } from './js/util/utils';

const SAMPLE_SESSION_DATA = {
	accountId: '123123(MyApp Account)',
	vpc: 'vpc-123123123',
	captureSets: [
		{
			ec2Instance: ['i-1234556 (10.4.5.7)'],
			remoteIps: ['vpc-1234556 (10.4.5.7)'],
			requestor: 'user1',
			id: uuid(),
		},
		{
			ec2Instance: ['i-1232321 (101.4.2.7)'],
			remoteIps: ['vpc-1232321 (101.4.2.7)'],
			requestor: 'user21',
			id: uuid(),
		},
		{
			ec2Instance: ['i-123455 (10.4.5.7)'],
			remoteIps: ['vpc-123455 (10.4.5.7)'],
			requestor: 'user21',
			id: uuid(),
		},
	],
};

export const SAMPLE_C2_INSTANCE_LIST = [
	'i-1234556 (10.4.5.7)',
	'i-1232321 (101.4.2.7)',
	'i-123455 (10.4.5.7)',
];
export const SAMPLE_VPC_LIST = [
	'vpc-1234556 (10.4.5.7)',
	'vpc-1232321 (101.4.2.7)',
	'vpc-123455 (10.4.5.7)',
];
export const getSampleSessionData = () =>
	JSON.parse(JSON.stringify(SAMPLE_SESSION_DATA));
export const timeDelay = async () => {
	await setTimeout(() => {}, 2000);
};

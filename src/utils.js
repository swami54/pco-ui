export const uuid = () => 'id' + new Date().getTime() + Math.random();

const SAMPLE_SESSION_DATA = {
	accountId: '123123(MyApp Account)',
	vpc: 'vpc-123123123',
	captureSets: [
		{
			ec2Instance: ['i-1234556 (10.4.5.7)'],
			remoteIps: '10.12.12.12',
			requestor: 'user1',
			id: uuid(),
		},
		{
			ec2Instance: ['i-1232321 (101.4.2.7)'],
			remoteIps: '10.12.212.12',
			requestor: 'user21',
			id: uuid(),
		},
		{
			ec2Instance: ['i-123455 (10.4.5.7)'],
			remoteIps: '10.12.212.12',
			requestor: 'user21',
			id: uuid(),
		},
	],
};

export const SAMPLE_C2_INSTANCE_DATA = [
	'i-1234556 (10.4.5.7)',
	'i-1232321 (101.4.2.7)',
	'i-123455 (10.4.5.7)',
];
export const getReactSelectOptions = (arr) =>
	arr.map((e) => {
		return { label: e, value: e };
	});
export const getSampleSessionData = () =>
	JSON.parse(JSON.stringify(SAMPLE_SESSION_DATA));

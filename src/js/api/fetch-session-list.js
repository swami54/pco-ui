export const fetchSessionList = async () => {
	await setTimeout(() => {}, 2000);
	return [
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
};

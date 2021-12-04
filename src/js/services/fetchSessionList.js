import { timeDelay } from "../../sample-data";
import { uuid } from "../util/utils";

export const fetchSessionList = async () => {
	await timeDelay();
	return [
		{
			sessionId: 'session-123',
			account: '123123',
			vpc: 'vpc-123123',
			status: 'Active',
			date: '24/02/2000',
			requestor: 'ss3',
			id: uuid()
		},
		{
			sessionId: 'session-321',
			account: '123123',
			vpc: 'vpc-123123',
			status: 'Active',
			date: '24/02/2000',
			requestor: 'ss3',
			id: uuid()
		},
		{
			sessionId: 'session-322',
			account: '123123',
			vpc: 'vpc-123123',
			status: 'Active',
			date: '24/02/2000',
			requestor: 'ss3',
			id: uuid()
		},
	];
};

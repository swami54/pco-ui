import { SAMPLE_VPC_LIST, timeDelay } from '../../sample-data';

export const fetchRemoteIpList = async () => {
	await timeDelay();
	return SAMPLE_VPC_LIST;
};

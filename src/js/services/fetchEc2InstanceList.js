import { SAMPLE_C2_INSTANCE_LIST, timeDelay } from '../../sample-data';

export const fetchEc2InstanceList = async () => {
	await timeDelay();
	return SAMPLE_C2_INSTANCE_LIST;
};

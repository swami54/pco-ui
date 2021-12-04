import { getSampleSessionData, timeDelay } from "../../sample-data";

export const fetchSessionData = async (params) => {
	console.log(params);
    await timeDelay()
	return getSampleSessionData();
};

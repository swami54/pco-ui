export const uuid = () => 'id' + new Date().getTime() + Math.random();
export const getReactSelectOptions = (arr) =>
	arr.map((e) => {
		return { label: e, value: e };
	});
export const getNewSessionData = () => {
	return {
		accountId: '',
		vpc: '',
		captureSets: [
			{
				ec2Instance: [],
				remoteIps: [],
				requestor: '',
				id: uuid(),
			},
		],
	};
};
export const createOption = (label) => ({
	label,
	value: label,
});
export const createSelectComponents = {
	DropdownIndicator: null,
};

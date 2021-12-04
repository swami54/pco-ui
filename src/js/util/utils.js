export const uuid = () => 'id' + new Date().getTime() + Math.random();
export const getReactSelectOptions = (arr) =>
	arr.map((e) => {
		return { label: e, value: e };
	});

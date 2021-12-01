import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function DeleteSession() {
	const params = useParams();
	useEffect(() => {
		console.log(params);
	});
	return <div>asdasd</div>;
}

// import React, { Component } from 'react';
import './DeleteSession.css';

// export default class DeleteSession extends Component {
// 	constructor(props) {
// 		super(props)
// 		console.log(this.props);
// 	}
// 	render() {
// 		return <div>DeleteSession</div>;
// 	}
// }

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function DeleteSession() {
	const params = useParams();
	useEffect(() => {
		console.log(params);
	});
	return <div>asdasd</div>;
}

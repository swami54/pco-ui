import React from 'react';
import { Link } from 'react-router-dom';
export const AppNavLink = ({ to, children, className }) => {
	return (
		<Link className={className ? className : 'btn btn-primary'} to={to}>
			{children}
		</Link>
	);
};

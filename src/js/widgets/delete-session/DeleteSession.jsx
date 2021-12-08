import React from 'react';
import { SessionForm } from '../../common/SessionForm';

export function DeleteSession() {
	return <SessionForm isDelete title={'Confirm Delete'} />;
}

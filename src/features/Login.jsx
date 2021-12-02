import { Form, Button, Container } from 'react-bootstrap';
import React,{ useState } from 'react';

export const Login = ({ setLoggedIn }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<Container className='LoginContainer'>
			<h1>PCO UI</h1>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					console.log({ email, password });
					setLoggedIn(true);
				}}
			>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						defaultValue={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						required
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						defaultValue={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						minLength={8}
						required
					/>
				</Form.Group>
				<Button type='submit'>Login</Button>
			</Form>
		</Container>
	);
};

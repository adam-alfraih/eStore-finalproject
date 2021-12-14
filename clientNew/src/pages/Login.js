import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth'
import { TextField, Container, Typography, Button, Grid } from '@material-ui/core'

import useStyles from './styles';

export default function Login() {
	const classes = useStyles();

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setErrorMessage] = useState(undefined)

	const navigate = useNavigate()

	const { loginUser } = useContext(AuthContext)

	const handleEmail = e => setEmail(e.target.value)
	const handlePassword = e => setPassword(e.target.value)

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password }

		axios.post('/auth/login', requestBody)
			.then(response => {
				// redirect -> projects
				// navigate('/login')
				console.log('i have a token mothafuckas', response.data.authToken)
				const token = response.data.authToken
				// call login user function from auth context
				loginUser(token)
				navigate('/')
			})
			.catch(err => {
				const errorDescrition = err.response.data.message
				setErrorMessage(errorDescrition)
			})
	}

	return (
		<div>
		<Container>
            <div className={classes.toolbar} />
			<Typography className={classes.title} variant="h3" gutterBottom>Log In</Typography>
			<form onSubmit={handleSubmit}>
				<label>Email: </label>
				<input type="text" name="email" value={email} onChange={handleEmail} />
				<label>Password: </label>
				<input type="password" value={password} onChange={handlePassword} />

				<button type="submit">Log in</button>
			</form>

			{errorMessage && <p>{errorMessage}</p>}

			<p>Don't have an account?</p>
			<Link to='/signup'>Signup</Link>
		</Container>
		</div>
	)
}

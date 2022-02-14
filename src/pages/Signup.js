import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { TextField, Container, Typography, Button, Grid, Paper, CssBaseline } from '@material-ui/core'

import useStyles from './styles';


export default function Signup() {
	const classes = useStyles();

	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setErrorMessage] = useState(undefined)

	const navigate = useNavigate()

	const handleEmail = e => setEmail(e.target.value)
	const handleName = e => setName(e.target.value)
	const handlePassword = e => setPassword(e.target.value)

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password, name }

		axios.post('/auth/signup', requestBody)
			.then(response => {
				console.log('hello')
				// redirect -> login 
				// navigate('/login')
			})
			.catch(err => {
				const errorDescrition = err.response.data.message
				setErrorMessage(errorDescrition)
			})
	}

	return (
		<>
		<CssBaseline/>
		<div>
			<div className={classes.toolbar} />
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Container>
						<div className={classes.toolbar} />
						<Typography className={classes.title} variant="h2" gutterBottom align="center">Sign Up</Typography>
						<form onSubmit={handleSubmit}>
							<Container className={classes.login}>
								{/* <label>Email: </label> */}
								<TextField id="outlined-basic" label="Email" variant="outlined" type="text" name="email" value={email} onChange={handleEmail} />
								</Container>
								<br></br>

								<Container className={classes.login}>
								{/* <label>Password: </label> */}
								<TextField id="outlined-basic" label="Password" variant="outlined" type="password" value={password} onChange={handlePassword} />
								</Container>
								<br></br>
								{/* <label>Name: </label> */}

								<Container className={classes.login}>
								<TextField id="outlined-basic" label="Name" variant="outlined" type="text" value={name} onChange={handleName} />
								</Container>
								<br></br>

								<Container className={classes.login}>
								<Button type="submit" variant="contained" color="primary" size="large">Sign Up</Button>
								</Container>
						</form>

						{errorMessage && <Typography  align="center">{errorMessage}</Typography>}

						<br></br>
						<br></br>
						<br></br>
						<Typography align="center">Already have an account?</Typography>
						<br></br>

						<Container className={classes.login}>
						<Button component={Link} to="/login" type="submit" variant="outlined" color="primary" size="large">Login
						</Button>
						</Container>

					</Container>
					</Paper>
					</main>
					</div>
					</>
					)
}

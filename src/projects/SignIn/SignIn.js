import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { InputBase, Button } from '@material-ui/core'
import styled from 'styled-components'
import usePasswordToggle from './usePasswordToggle'

const darkGray = '#A9A9A9'
const gray = '808080'
const lightGray = '#D3D3D3'
const gainsboro = '#DCDCDC'

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			// margin: theme.spacing(1),
			// width: '45ch',
			// width: '100%'
		},
	},
	password: {
		width: '100% !important',
		borderRadius: theme.shape.borderRadius,
		color: 'white',
		backgroundColor: 'transparent',
		borderBottom: `1px solid ${gainsboro}`,
		height: '2.5rem',
		padding: theme.spacing(1),
		paddingBottom: '0px',
		marginBottom: '3rem',
		marginRight: '0px',
	},
	email: {
		width: '100% !important',
		borderRadius: theme.shape.borderRadius,
		color: 'white',
		borderBottom: `1px solid ${gainsboro}`,
		height: '2.5rem',
		padding: theme.spacing(1),
		paddingBottom: '0px',
		marginBottom: '1rem',
		backgroundColor: 'transparent',
	},
	button: {
		height: '2.75rem',
		width: '100%',
		color: 'white',
		fontSize: '1.2rem',
		backgroundColor: '#06f',
		border: '1px solid #06f',
		// height: '45px',
		'&:hover': {
			fontSize: '1.2rem',
		},
		passwordField: {
			marginBottom: '1rem',
		},
	},
}))

export default function SignIn() {
	const classes = useStyles()
	const [PasswordInputType, ToggleIcon] = usePasswordToggle()

	return (
		<>
			<Styled>
				<h1>Sign in</h1>
				<form className={classes.root} autoComplete='off'>
					{/* <TextField
						id='standard-basic'
						label='Email address'
						variant='standard'
						className={classes.textField}
					/>{' '} */}
					<div className='input'>
						<InputBase
							placeholder='Email address'
							variant='outlined'
							className={classes.email}
						/>
						<div className='password-container'>
							<InputBase
								placeholder='Password'
								type={PasswordInputType}
								variant='outlined'
								className={classes.password}
							/>
							<div className='visibility'>{ToggleIcon}</div>
						</div>
					</div>
				</form>
				<a href='/' className='forgot-password'>Forgot password?</a>
				<Button className={classes.button}>Sign in</Button>
				<div className='new'>
					<span>New to Entropiya? </span> <a href='/'> Sign up now</a>
				</div>
			</Styled>
		</>
	)
}

const Styled = styled.div`
	position: relative;
	margin: 5rem auto;
	/* width: 40rem; */
	/* width: 28rem; //sing in page */
	/* height: 40rem; */
	width: 25rem;
	padding-left: 4rem;
	padding-right: 4rem;
	padding-top: 3rem;
	padding-bottom: 5rem;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	/* background-color: #262626; */
	/* background-color: rgba(38, 38, 38, 0.75); */
	background-color: rgba(0, 0, 0, 0.6);
	color: white;

	@media (max-width: 46rem) {
		& {
			width: 22.5rem;
			position: relative;
			margin: 3rem 1.5rem auto auto;
		}
	}

	.input {
		width: 45ch;

		@media (max-width: 30rem) {
			width: 40ch;
		}
	}

	h1 {
		font-size: 2rem;
	}

	.password-container {
		display: flex;
		align-items: center;

		.visibility {
			margin-bottom: 2.25rem;
			padding: 1rem;
			position: absolute;
			right: 3.5rem;
			cursor: pointer;
			z-index: 5;
		}
	}

	.forgot-password {
		align-self: flex-start;
		margin-bottom: 2rem;
		text-decoration: none;
			color: white;
			font-weight: 550;
			&:hover {
				opacity: 0.75;
			}
	}

	.new {
		margin-top: 2rem;
		align-self: flex-end;
		> a {
			text-decoration: none;
			color: white;
			font-weight: 550;
			&:hover {
				opacity: 0.75;
			}
		}
	}
`

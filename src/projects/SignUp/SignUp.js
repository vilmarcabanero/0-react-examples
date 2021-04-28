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
			// width: '25ch',
			// width: '100%'
			position: 'relative',
		},
	},
	password: {
		width: '100%',
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
	name: {
		width: '50%',
		borderRadius: theme.shape.borderRadius,
		color: 'white',
		borderBottom: `1px solid ${gainsboro}`,
		height: '2.5rem',
		padding: theme.spacing(1),
		paddingBottom: '0px',
		marginBottom: '1rem',
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

export default function SignUp() {
	const classes = useStyles()
	const [PasswordInputType, ToggleIcon] = usePasswordToggle()

	return (
		<>
			<Styled>
				<h1>Create an account</h1>
				<form className={classes.root} noValidate autoComplete='off'>
					{/* <TextField
						id='standard-basic'
						label='Email address'
						variant='standard'
						className={classes.textField}
					/>{' '} */}
					<InputBase
						placeholder='First Name'
						variant='outlined'
						className={classes.name}
					/>
					<InputBase
						placeholder='Last Name'
						variant='outlined'
						className={classes.name}
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
				</form>

				<Button className={classes.button}>Sign up</Button>
				<div>
					<div>
						<span>Already have an account? </span> <a href='/'> Sign in</a>
					</div>
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
	background-color: rgba(0, 0, 0, 0.5);
	color: white;

	@media (max-width: 46rem) {
		& {
			width: 22.5rem;
			position: relative;
			margin-top: 3rem;
			margin-bottom: 1.5rem;
			margin-left: auto;
			margin-right: auto;
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
			padding: 0.5rem;
			position: absolute;
			right: 0rem;
			cursor: pointer;
			z-index: 20;
		}
	}

	> div {
		> div {
			position: absolute;
			right: 4.5rem;
			margin-top: 0.75rem;
			> a {
				text-decoration: none;
				color: white;
				font-weight: 550;
				&:hover {
					opacity: 0.75;
				}
			}
		}
	}
`

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, InputBase, Button } from '@material-ui/core'
import styled from 'styled-components'

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
		},
	},
	textField: {
		border: '0px solid #',
		// backgroundColor: '#808080',
		borderRadius: theme.shape.borderRadius,
		color: 'white',
		borderBottom: `1px solid ${lightGray}`,
	},
	password: {
		width: '100%',
		borderRadius: theme.shape.borderRadius,
		color: 'white',
		borderBottom: `1px solid ${gainsboro}`,
		height: '2.5rem',
		padding: theme.spacing(1),
		paddingBottom: '0px',
		marginBottom: '1rem',
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
	},
}))

export default function BasicTextFields() {
	const classes = useStyles()

	return (
		<>
			<StyledTextField>
				<h1>Sign up</h1>
				<form className={classes.root} noValidate autoComplete='off'>
					{/* <TextField
						id='standard-basic'
						label='Email address'
						variant='standard'
						className={classes.textField}
					/>{' '} */}
					<br />
					<InputBase
						placeholder='First Name'
						variant='outlined'
						className={classes.name}
						InputLabelProps={{ id: 'inputBaseLabel' }}
					/>
					<InputBase
						placeholder='Last Name'
						variant='outlined'
						className={classes.name}
					/>
					<br />
					<InputBase
						placeholder='Password'
						variant='outlined'
						className={classes.password}
					/>
					<InputBase
						placeholder='Confirm password'
						variant='outlined'
						className={classes.password}
					/>
				</form>
				<Button className={classes.button}>Sign up</Button>
			</StyledTextField>
		</>
	)
}

const StyledTextField = styled.div`
	position: relative;
	margin: 5rem auto;
	/* width: 40rem; */
	/* width: 28rem; //sing in page */
	/* height: 40rem; */
	width: 20rem;
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
			margin: 3rem 1.5rem auto auto;
		}
		h1 {
			font-size: 2rem;
		}
	}
`

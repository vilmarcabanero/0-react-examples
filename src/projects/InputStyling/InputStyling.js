import React from 'react'
import styled from 'styled-components'
import { InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const gainsboro = '#DCDCDC'
const darkGray = '#A9A9A9'
const gray = '808080'
const lightGray = '#D3D3D3'

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			// margin: theme.spacing(1),
			// width: '45ch',
			// width: '100%'
		},
	},
	email: {
		fontSize: '1rem',
		width: 'inherit',
		borderRadius: theme.shape.borderRadius,
		color: 'white',
		borderBottom: `1px solid ${gainsboro}`,
		height: '2.5rem',
		padding: theme.spacing(1),
		paddingBottom: '0px',
		marginBottom: '1rem',
		backgroundColor: 'transparent',
	},
}))

const InputStyling = () => {
	const classes = useStyles()
	return (
		<Component>
			<label class='custom-input'>
				<InputBase id='input' className={classes.email} />
				<span className='placeholder'>Email address</span>
			</label>
			<label class='custom-field'>
				<input className={classes.email} required />
				<span className='placeholder'>Email address</span>
			</label>
		</Component>
	)
}

const Component = styled.div`
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

	.custom-input {
		position: relative;
		width: 100%;

    #input {

    }
		.placeholder {
			font-size: 1rem;
			position: absolute;
			left: 0.5rem;
			top: 1rem;
			color: ${darkGray};
		}

	}

	.custom-field {
		position: relative;
		width: 100%;

		input {
			outline: none;
			border-top: none;
			border-left: none;
			border-right: none;

			&:valid + .placeholder, &:focus + .placeholder {
				top: 0;
				font-size: 0.7rem;
				color: ${lightGray};
			}
		}
		.placeholder {
			font-size: 1rem;
			position: absolute;
			left: 0.5rem;
			top: 1.6rem;
			color: #aaa;
			transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
      cursor: text;
		}
	}
`

export default InputStyling

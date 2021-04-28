import React from 'react'
import styled from 'styled-components'
import { InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const gainsboro = '#DCDCDC'

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			// margin: theme.spacing(1),
			// width: '45ch',
			// width: '100%'
		},
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
}))

const InputStyling = () => {
	const classes = useStyles()
	return (
		<Component>
      <label class='custom-field'>
        <InputBase
				placeholder='Email address'
				variant='outlined'
				className={classes.email}
			/>
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

  .custom-field {
    position: relative;
    padding-top: 1rem;
  }
`

export default InputStyling

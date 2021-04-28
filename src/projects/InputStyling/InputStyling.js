import React from 'react'
import styled from 'styled-components'
const gainsboro = '#DCDCDC'
const darkGray = '#A9A9A9'
const gray = '808080'
const lightGray = '#D3D3D3'

const InputStyling = () => {
	return (
		<Component>
			<label class='custom-input'>
				<input required />
				<span className='placeholder'>Email address</span>
			</label>
			<label class='custom-input'>
				<input required />
				<span className='placeholder'>Email address</span>
			</label>
			<button>Sign in</button>
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
	padding-left: 3.75rem;
	padding-right: 4.25rem;
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
			margin-top: 3rem;
			margin-bottom: 1.5rem;
			margin-left: auto;
			margin-right: auto;
		}
	}

	.custom-input {
		position: relative;
		width: 100%;
		margin-bottom: 1.25rem;

		input {
			font-size: 1rem;
			width: inherit;
			border-radius: 5px;
			color: white;
			border-bottom: 1px solid ${gainsboro};
			height: 2rem;
			padding-left: 0.5rem;
			background-color: transparent;
			outline: none;
			border-top: none;
			border-left: none;
			border-right: none;

			&:valid + .placeholder,
			&:focus + .placeholder {
				top: -10px;
				font-size: 0.75rem;
				color: ${lightGray};
			}
		}
		.placeholder {
			font-size: 1rem;
			position: absolute;
			left: 0.5rem;
			top: 0.75rem;
			color: #aaa;
			transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
			cursor: text;
		}
	}

	button {
		height: 2.75rem;
		width: 25.5rem;
		color: white;
		margin-right: auto;
		margin-left: auto;
		font-size: 1.2rem;
		background-color: #06f;
		border: 1px solid #06f;
		border-radius: 0.2rem;
		&:hover {
			font-size: 1.2rem;
			cursor: pointer;
			background-color: transparent;
		}

		@media (max-width: 46rem) {
			& {
				width: 23rem;
			}
		}
	}
`

export default InputStyling

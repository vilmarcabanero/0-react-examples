import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'

const RenderHTML = () => {
	const htmlString = '<h1>Hello World</h1>'
	return (
		<StyledRender>
			{htmlString}
			<div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
			<div>{parse(htmlString)}</div>
		</StyledRender>
	)
}

const StyledRender = styled.div`
		position: relative;
	margin: 4rem auto;
	width: 40rem;
	padding: 2rem;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background-color: #262626;
	color: white;
`

export default RenderHTML

import styled from 'styled-components'
import logo from '../assets/images/logo.png'
import videoSrc from './videoSrc'

const Videos = () => {
	return (
		<>
			<div>
				{videoSrc.map(url => {
					return (
						<StyledVideo className='video'>
							<iframe
								title='Algebra 1.3'
								src={url}
								width='100%'
								height='100%'
								frameborder='0'
								scrolling='no'
								seamless=''
								allowfullscreen='true'
								webkitallowfullscreen='true'
								mozallowfullscreen='true'
							></iframe>
							<div>&nbsp;</div>
							<img src={logo} alt='afdafd' />
						</StyledVideo>
					)
				})}
			</div>
		</>
	)
}

const StyledVideo = styled.div`
	width: 640px;
	height: 480px;
	position: relative;
	margin: 3rem auto;

	> div {
		width: 80px;
		height: 80px;
		position: absolute;
		opacity: 0;
		right: 0px;
		top: 0px;
	}
	> img {
		width: 50px;
		height: 50px;
		position: absolute;
		right: 2px;
		top: 2px;
	}

	@media (max-width: 40rem) {
		.video {
			width: 22.5rem;
			height: 16.875rem;

			position: relative;
			margin: 3rem 0;

			> div {
				width: 80px;
				height: 80px;
				position: absolute;
				opacity: 0;
				right: 0px;
				top: 0px;
			}
			> img {
				width: 50px;
				height: 50px;
				position: absolute;
				right: 2px;
				top: 2px;
			}
		}
	}
`

export default Videos

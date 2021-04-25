import styled from 'styled-components'
import users from './users'
import logo from '../assets/images/logo.png'

const MappedObjects = () => {
	return (
		<>
			{users.map(userInfo => {
				return (
					<StyledUser>
						<h3>{userInfo.name}</h3>
						<span>{userInfo.age}</span>
						<span>{userInfo.gender}</span>
						<StyledVideo className='video'>
							<iframe
								title='Algebra 1.3'
								src={userInfo.url}
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
					</StyledUser>
				)
			})}
			{/* <div>
				<h3>Vilmar</h3>
				<span>24</span>
				<span>male</span>
			</div> */}
		</>
	)
}

const StyledUser = styled.div`
	position: relative;
	margin: 4rem auto;
	width: 40rem;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #262626;
	color: white;
	> h3 {
		margin: 0;
	}
`

const StyledVideo = styled.div`
	width: 40rem;
	height: 30rem;
	position: relative;
	margin: 1rem 0 auto auto;

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
export default MappedObjects

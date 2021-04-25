import styled from 'styled-components'
import users from './users'

const MappedObjects = () => {
	return (
		<>
			{users.map((userInfo) => {
				return (
					<StyledUser>
						<h3>{userInfo.name}</h3>
						<span>{userInfo.age}</span>
						<span>{userInfo.gender}</span>
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
export default MappedObjects

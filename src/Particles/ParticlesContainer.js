import Particles from 'react-particles-js'
import particlesParams from './particlesParams'
// import styled from 'styled-components'

const ParticlesContainer = () => {
	return (
		<div>
			<Particles params={particlesParams}/>
		</div>
	)
}

// const styledParticles = styled.div`
// 	position: relative;
// 	z-index: 2;
// 	background-color: #4398ff;
// 	height: 100vh;
// `

export default ParticlesContainer

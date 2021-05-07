//Main
import React, { useState } from 'react'
import './App.css'
import ParticleBackground from './Particles/ParticleBackground'
import PracticeTests from './projects/PracticeTests/PracticeTests'
import SignUp from './projects/SignUp/SignUp'
import SignIn from './projects/SignIn/SignIn'
// import Videos from './GdriveVideos/Videos'
import InputStyling from './projects/InputStyling/InputStyling'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './theme.js'
import ReactBootstrap from './projects/ReactBootstrap/ReactBootstrap'

const StyledApp = styled.div``

function App() {
	const [theme, setTheme] = useState('dark')

	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	return (
		<>
			{/* <ParticleBackground /> */}
			{/* <Videos/> */}
			{/* <PracticeTests /> */}
			{/* <InputStyling /> */}
			{/* <SignUp/>
      <SignIn/> */}
			{/* <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				<GlobalStyles/>
				<StyledApp>Hello World
					<button onClick={() => themeToggler()}> Change Theme</button>
				</StyledApp>
			</ThemeProvider> */}
			<ReactBootstrap/>
		</>
	)
}

export default App

// //ThemeToggler
// import { useState } from 'react'
// import Splash from './Components/SplashScreen'
// import { ThemeProvider } from 'styled-components'

// const LightTheme = {
// 	pageBackground: 'white',
// 	titleColor: '#dc658b',
// 	tagLineColor: 'black',
// }

// const DarkTheme = {
// 	pageBackground: '#282c36',
// 	titleColor: 'lightpink',
// 	tagLineColor: 'lavender',
// }

// const themes = {
// 	light: LightTheme,
// 	dark: DarkTheme,
// }

// function App() {
// 	const [theme, setTheme] = useState('light')
// 	return (
// 		<ThemeProvider theme={themes[theme]}>
// 			<Splash theme={theme} setTheme={setTheme} />
// 		</ThemeProvider>
// 	)
// }

// export default App

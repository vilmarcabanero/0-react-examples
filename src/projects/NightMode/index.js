import { useState } from 'react'
import Splash from './SplashScreen'
import { ThemeProvider } from 'styled-components'
import {themes} from './theme'


export default function NightMode() {
	const [theme, setTheme] = useState('dark')

	return (
		<ThemeProvider theme={themes[theme]}>
			<Splash theme={theme} setTheme={setTheme} />
		</ThemeProvider>
	)
}

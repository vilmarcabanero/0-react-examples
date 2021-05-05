import { useState } from 'react'

const useThemeToggler = () => {
	const [theme, setTheme] = useState('light')

	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	const Theme = theme ? 'text' : 'password'
	setTheme(Theme)
}

export default useThemeToggler

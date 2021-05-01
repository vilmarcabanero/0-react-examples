import React, { useState } from 'react'

const UserCounter = () => {
	const [state, setState] = useState({ count: 4, theme: 'blue' })

	const count = state.count
	const theme = state.theme

	function decrementCount() {
		setState(prevState => {
			return { ...prevState, count: prevState.count - 1, theme: 'red' }
		})
	}

	function incrementCount() {
		setState(prevState => {
			return { ...prevState, count: prevState.count + 1, theme: 'blue' }
		})
	}

	// const [count, setCount] = useState(5)
	// const [theme, setTheme] = useState('blue')

	// function decrementCount() {
	// 	setCount((prevCount) => prevCount - 1)
	// 	setTheme(theme => theme = 'red')
	// }

	// function incrementCount() {
	// 	setCount((prevCount) => prevCount + 1)
	// 	setTheme(theme => theme = 'blue')
	// }



	return (
		<div>
			<button onClick={decrementCount}>-</button>
			<center>
				{count} {theme}
			</center>
			<button onClick={incrementCount}>+</button>
		</div>
	)
}

export default UserCounter

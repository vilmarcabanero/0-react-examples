// import React, { useState } from 'react'
// import { Visibility, VisibilityOff } from '@material-ui/icons'
// // import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// const usePasswordToggle = () => {
// 	const [visible, setVisibility] = useState(false)

// 	// const Icon = () => {
// 	//   if(visible) {
// 	//     return <Visibility className='visibility'/>
// 	//   } else {
// 	//     return <VisibilityOff className='visibility'/>
// 	//   }
// 	// }

// 	// const Icon = visible ? 'Hide' : 'Show'

// 	const Icon = (
// 		<span onclick={() => setVisibility(visibility => !visibility)}>
// 			{visible ? 'Hide' : 'Show'}
// 		</span>
// 	)

// 	const InputType = visible ? 'text' : 'password'
// 	return [InputType, Icon]
// }

// export default usePasswordToggle

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Visibility, VisibilityOff } from '@material-ui/icons'
const usePasswordToggle = () => {
	const [visible, setVisiblity] = useState(false)

	const Icon = (
		<span onClick={() => setVisiblity(visiblity => !visiblity)}>
			{visible ? 'Hide' : 'Show'}
		</span>
	)

	const InputType = visible ? 'text' : 'password'

	return [InputType, Icon]
}

export default usePasswordToggle

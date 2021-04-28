import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const usePasswordToggle = () => {
  const [visible, setVisibility] = useState(false)

  const Icon = (
    <VisibilityOff className='visibility' />
  )
  return (
    <div>
      
    </div>
  )
}

export default usePasswordToggle

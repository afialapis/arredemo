import React from 'react'

import {InputGroup as RSInputGroup} from 'reactstrap'

const InputGroup = ({children, customInputGroup, size, inputId}) => {

  if (customInputGroup != undefined) {
    return (
      React.cloneElement(customInputGroup, {children: children})
    )    
  }

  return (
      <RSInputGroup
        size      = {size}
        id        = {inputId}
        className = {`rdp-input-group`}
      >
        {children}
      </RSInputGroup>
  )
}
    
export {InputGroup}
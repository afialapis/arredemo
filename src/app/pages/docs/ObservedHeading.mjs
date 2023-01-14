import React, {useState, useCallback} from 'react'

const ObservedHeading = ({Tag, children, onHeadingObserve, ...props}) => {
  const [observed, setObserved]= useState(false)

  const ref = useCallback(node => {
    if (node !== null) {
      if (observed===false) {
        // console.log('observing the node ' + node.id)
        setObserved(true)
        onHeadingObserve(node)
      }
    }
  }, [onHeadingObserve])
  
  return (
    <Tag ref={ref}
         {...props}>
      {children}
    </Tag>
  )
}

export default ObservedHeading
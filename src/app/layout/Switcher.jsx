import React from 'react'
import useAppContext from 'app/context/useAppContext.mjs'

const Switcher = () => {
  const context = useAppContext()


  return (

    <div className="switcher select">
      <select 
        onChange={(event) => context.onSwitchVersion(event.target.value)}
        value={context.selectedVersion}>
        {context.versions.map((v) =>
          <option 
            key  = {v}
            value= {v}>
            {`Version: ${v}`}
          </option>          
        )}
      </select>        
    </div>

  )
}

export default Switcher

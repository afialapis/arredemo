import React from 'react'
import useAppContext from '../context/useAppContext.mjs'

const Menu = ({path, menu, onMenuClick, activeOption}) => {
  const context = useAppContext()

  return (
    <div className="menu">
      {path=='docs'
       ? 
          <div className="switcher">
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
        : null}
      <ul>
        {menu.map( (item,idx) => 
          <li key={`menu_${idx}`}
              className= {`${activeOption==idx ? 'selected' : ''} level-${item.level}`}
              data-level={item.level}
              id={item.id}    
              onClick={() => onMenuClick(idx)}
              >
            <span 
                  className= "link">
              {item.title}
            </span>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Menu

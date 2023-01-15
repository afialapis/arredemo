import React from 'react'

const Menu = ({ menu, onMenuClick, activeOption}) => {

return (
    <div className="menu">
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

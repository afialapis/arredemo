import { useCallback } from "react"

const Menu = ({ innerRef, menu, onMenuClick, activeOption }) => {
  const handleClick = useCallback(
    (idx) => {
      onMenuClick(idx)
    },
    [onMenuClick]
  )

  return (
    <div ref={innerRef} className="menu">
      <ul>
        {menu.map((item, idx) => (
          <li
            key={`menu_${item.id || idx}`}
            className={`${activeOption === idx ? "selected" : ""} level-${item.level}`}
            data-level={item.level}
            id={`menu-${item?.id || idx}`}
            onClick={() => handleClick(idx)}
            onKeyDown={() => handleClick(idx)}
          >
            <span className="link">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu

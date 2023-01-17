import React from 'react'
import Menu from 'app/layout/Menu.jsx'
import Footer from 'app/layout/Footer.jsx'
import Switcher from './Switcher.jsx'

const PageBodyMobi = ({menu, onMenuClick, activeOption, path, children}) => {

  return (
    <>
      <div className="body">
        {path=='docs'
          ? <Switcher/>
          : null
        }

        <Menu 
              path            = {path}
              menu            = {menu}
              onMenuClick     = {onMenuClick}
              activeOption    = {activeOption}/>
      </div>
      <div className="content">
        {children}
        <Footer/>
      </div>
    </>
  )
  
}

export default PageBodyMobi


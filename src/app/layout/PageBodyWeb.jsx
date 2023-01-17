import React from 'react'
import Menu from 'app/layout/Menu.jsx'
import Footer from 'app/layout/Footer.jsx'
import Switcher from './Switcher.jsx'

const PageBodyWeb = ({menu, onMenuClick, activeOption, path, children}) => {

  return (
    <div className="body">
      <div className="left">
        <>
          {path=='docs'
          ? <Switcher/>
          : null
          }
          <Menu 
            menu            = {menu}
            onMenuClick     = {onMenuClick}
            activeOption    = {activeOption}/>
          {/*<Footer/>*/}
        </>
      </div>


      <div className="content">
        {children}
        <Footer/>
      </div>
    </div>
  )
  
}

export default PageBodyWeb

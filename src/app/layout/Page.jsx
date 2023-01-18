import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Header from 'app/layout/Header.jsx'
import Menu from 'app/layout/Menu.jsx'
import Footer from 'app/layout/Footer.jsx'
import VersionSwitcher from './VersionSwitcher.jsx'
import useActiveOption from './hooks/useActiveOption.mjs'
import { domScrollTo } from 'app/util/dom.mjs'

const getPath = (loc) => loc.pathname.split('/')[1] == 'demo' ? 'demo' : 'docs'


const Page = ({menu, children}) => {
  const location= useLocation()
  const [path, setPath]= useState(getPath(location))
  const [responsiveOpen, setResponsiveOpen]= useState(false)
  const activeOption = useActiveOption(menu)

  useEffect(() => {
    setPath(getPath(location))
  }, [location])
  
  const handleOpenMenu = (idx) => {
    setResponsiveOpen(false)
    const hid= menu[idx].id.replace('menu-', '')
    domScrollTo(`#${hid}`)
  }
  
  return (
    <div className="main">
      <nav className="header">
        <Header 
          path  = {path}
          responsiveOpen= {responsiveOpen}
          onResponsiveToggle= {(show) => setResponsiveOpen(show)}
          />
      </nav>

      <div className={`body`}>
        <div className={`menu-container ${responsiveOpen ? 'responsive-open' : ''}`}>
          <>
            {path=='docs'
            ? <VersionSwitcher/>
            : null
            }
            <Menu 
              path            = {path}
              menu            = {menu}
              onMenuClick     = {handleOpenMenu}
              activeOption    = {activeOption}/>
            {/*<Footer/>*/}
          </>
        </div>


        <div className="content">
          {children}
          <Footer/>
        </div>
      </div>
          
        
      
    </div>
  )
}

export default Page

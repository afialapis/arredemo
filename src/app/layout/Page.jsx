import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Header from 'app/layout/Header.jsx'
import PageBodyWeb from 'app/layout/PageBodyWeb.jsx'
import PageBodyMobi from 'app/layout/PageBodyMobi.jsx'
import useActiveOption from './useActiveOption.jsx'
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

  // console.log('Page : render ' + menu.length)
  
  return (
    <div className="main">
      <nav className="header">
        <Header 
          path  = {path}
          responsiveOpen= {responsiveOpen}
          onResponsiveToggle= {(show) => setResponsiveOpen(show)}
          />
      </nav>

    
      {!responsiveOpen
        ? <PageBodyWeb 
            menu= {menu}
            onMenuClick={handleOpenMenu}
            activeOption={activeOption}
            path= {path}>
            {children}
          </PageBodyWeb>
        
      :  <PageBodyMobi 
            menu= {menu}
            onMenuClick={handleOpenMenu}
            activeOption={activeOption}
            path= {path}>
          {children}
        </PageBodyMobi>
      } 
        
      
    </div>
  )
}

export default Page

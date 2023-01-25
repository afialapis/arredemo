import React from 'react'
import useAppContext from 'app/context/useAppContext.mjs'
import RepoLink from 'app/layout/components/RepoLink.jsx'
//import Logo from 'app/layout/components/Logo.jsx'


const Header = ({path, responsiveOpen, onResponsiveToggle}) => {
  const {arreConfig} = useAppContext()
  const has_demo = arreConfig.demo_entry != null
  const logo= `url(../${arreConfig.logo})`

  return (

      <div className="grid" style={{"backgroundImage": logo}}>

        {/*<Logo/>*/}
        <div></div>
        <div className="toolbar">
          {has_demo
           ? <>
              <a className={`link demo ${path=='demo' ? 'dark' : 'light'}`} href='demo.html'>
                {'Demo'}
              </a>

              <a className={`link docs ${path=='docs' ? 'dark' : 'light'}`} href='docs.html'>
                {'Docs'}
              </a>
            </>
           : null}
          
          <RepoLink/>
        </div>
        <div className="toggler"
             onClick={() => onResponsiveToggle(! responsiveOpen)}>
          <div className={`toggle ${responsiveOpen ? 'open' : ''}`}>
            <span></span>
          </div>
        </div>
      </div>
   
  )
}
    
export default Header

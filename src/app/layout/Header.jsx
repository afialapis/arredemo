import React from 'react'
import useAppContext from '../context/useAppContext.mjs'
import RepoLink from './components/RepoLink'
import Logo from './components/Logo'


const Header = ({path, responsiveOpen, onResponsiveToggle}) => {
  const context = useAppContext()
  const has_demo = context.arreConfig.has_demo

  return (

      <div className="grid">

        <Logo/>
        <div className="toolbar">
          {has_demo
           ? <>
              <a className={`link demo ${path=='demo' ? 'dark' : 'light'}`} href='/demo'>
                {'Demo'}
              </a>

              <a className={`link docs ${path=='docs' ? 'dark' : 'light'}`} href='/docs'>
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

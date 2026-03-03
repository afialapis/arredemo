import useAppContext from "app/context/useAppContext.mjs"
import RepoLink from "app/layout/components/RepoLink.jsx"
import { useCallback } from "react"

//import Logo from 'app/layout/components/Logo.jsx'

const Header = ({ path, responsiveOpen, onResponsiveToggle }) => {
  const { arreConfig, theme, toggleTheme } = useAppContext()

  const logo_url = arreConfig.logo.ok ? `url("${arreConfig.logo.dest}")` : undefined

  const handleClick = useCallback(
    (ev) => {
      ev.stopPropagation()
      onResponsiveToggle(!responsiveOpen)
    },
    [onResponsiveToggle, responsiveOpen]
  )

  return (
    <div className="grid" style={{ backgroundImage: logo_url }}>
      {/*<Logo/>*/}
      <div></div>
      <div className="toolbar">

        {arreConfig.has_demo ? (
          <>
            <a className={`link demo ${path === "demo" ? "dark" : "light"}`} href="demo.html">
              {"Demo"}
            </a>

            <a className={`link docs ${path === "docs" ? "dark" : "light"}`} href="docs.html">
              {"Docs"}
            </a>
          </>
        ) : null}

        <RepoLink />
        {/* Theme Toggle */}
        {/* biome-ignore lint/a11y/noStaticElementInteractions: Well you know */}
        <a
          className={`link theme-toggle ${theme === "light" ? "dark" : "light"}`}
          /* biome-ignore lint/a11y/useValidAnchor: Well you know */
          onClick={toggleTheme}
          onKeyDown={toggleTheme}
          title="Toggle Dark Mode"
        >
          {theme === "light" ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <title>Dark Mode</title>
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <title>Light Mode</title>
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )}
        </a>        
      </div>

      {/* biome-ignore lint/a11y/noStaticElementInteractions: Well you know */}
      <div className="toggler" onClick={handleClick} onKeyDown={handleClick}>
        <div className={`toggle ${responsiveOpen ? "open" : ""}`}>
          <span></span>
        </div>
      </div>
      
    </div>
  )
}

export default Header

import useAppContext from "app/context/useAppContext.mjs"
import RepoLink from "app/layout/components/RepoLink.jsx"
import { useCallback } from "react"

//import Logo from 'app/layout/components/Logo.jsx'

const Header = ({ path, responsiveOpen, onResponsiveToggle }) => {
  const { arreConfig } = useAppContext()

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

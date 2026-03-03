import Footer from "app/layout/Footer.jsx"
import Header from "app/layout/Header.jsx"
import Menu from "app/layout/Menu.jsx"
import { domScrollTo } from "app/util/dom.mjs"
import { useRef, useState } from "react"
import useActiveOption from "./hooks/useActiveOption.mjs"
import { useOnClickOutside } from "./hooks/useOnClickOutside.mjs"
import VersionSwitcher from "./VersionSwitcher.jsx"

const Page = ({ path, menu, children }) => {
  const menuRef = useRef(null)
  const [responsiveOpen, setResponsiveOpen] = useState(false)
  const activeOption = useActiveOption(menu)

  const handleOpenMenu = (idx) => {
    setResponsiveOpen(false)
    if (idx) {
      const hid = menu[idx].id.replace("menu-", "")
      domScrollTo(`#${hid}`)
    }
  }

  useOnClickOutside(menuRef, () => {
    setResponsiveOpen(false)
  })

  return (
    <div className="main">
      <nav className="header">
        <Header
          path={path}
          responsiveOpen={responsiveOpen}
          onResponsiveToggle={(show) => setResponsiveOpen(show)}
        />
      </nav>

      <div className={`body ${menu.length > 0 ? "with-menu" : "without-menu"}`}>
        {menu.length === 0 ? null : (
          <div className={`menu-container ${responsiveOpen ? "responsive-open" : ""}`}>
            {path === "docs" ? <VersionSwitcher /> : null}
            <Menu
              innerRef={menuRef}
              path={path}
              menu={menu}
              onMenuClick={handleOpenMenu}
              activeOption={activeOption}
            />
            {/*<Footer/>*/}
          </div>
        )}

        <div className="content">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Page

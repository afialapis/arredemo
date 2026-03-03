import AppContext from "app/context/AppContext.mjs"
import Docs from "app/pages/docs/Docs.jsx"
import { useCallback, useState } from "react"

const AppDocs = ({ pkgPath, pkgJson, arreConfig, readmes }) => {
  const docVersions = Object.keys(readmes)
  const [selectedVersion, setSelectedVersion] = useState(docVersions[0])
  const [readme, setReadme] = useState(readmes[docVersions[0]])
  const [theme, setTheme] = useState("light")

  const onSwitchVersion = useCallback(
    (nVersion) => {
      setSelectedVersion(nVersion)
      setReadme(readmes[nVersion])
    },
    [readmes]
  )

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light"
      document.documentElement.setAttribute("data-theme", newTheme)
      return newTheme
    })
  }, [])

  return (
    <AppContext.Provider
      value={{
        pkgPath,
        pkgJson,
        arreConfig,
        versions: docVersions,
        selectedVersion,
        readme,
        onSwitchVersion,
        theme,
        toggleTheme
      }}
    >
      <Docs readme={readme} />
    </AppContext.Provider>
  )
}

export default AppDocs

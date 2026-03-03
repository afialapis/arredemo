import AppContext from "app/context/AppContext.mjs"
import Demo from "app/pages/demo/Demo.jsx"
import { useCallback, useState } from "react"

const App = ({ pkgPath, pkgJson, arreConfig }) => {
  const [theme, setTheme] = useState("light")

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
        theme,
        toggleTheme
      }}
    >
      <Demo />
    </AppContext.Provider>
  )
}

export default App

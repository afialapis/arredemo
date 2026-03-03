import AppContext from "app/context/AppContext.mjs"
import Docs from "app/pages/docs/Docs.jsx"
import { useCallback, useState } from "react"

const AppDocs = ({ pkgPath, pkgJson, arreConfig, readmes }) => {
  const docVersions = Object.keys(readmes)
  const [selectedVersion, setSelectedVersion] = useState(docVersions[0])
  const [readme, setReadme] = useState(readmes[docVersions[0]])

  const onSwitchVersion = useCallback(
    (nVersion) => {
      setSelectedVersion(nVersion)
      setReadme(readmes[nVersion])
    },
    [readmes]
  )

  return (
    <AppContext.Provider
      value={{
        pkgPath,
        pkgJson,
        arreConfig,
        versions: docVersions,
        selectedVersion,
        readme,
        onSwitchVersion
      }}
    >
      <Docs readme={readme} />
    </AppContext.Provider>
  )
}

export default AppDocs

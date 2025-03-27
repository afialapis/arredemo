import React, {useState, useCallback} from 'react'
import AppContext from 'app/context/AppContext.mjs'
import Docs from 'app/pages/docs/Docs.jsx'


const AppDocs = ({pkgPath, pkgJson, arreConfig, readmes}) => {
  const docVersions= Object.keys(readmes)
  const [versions, setVersions]= useState(docVersions)
  const [selectedVersion, setSelectedVersion]= useState(docVersions[0])
  const [readme, setReadme]= useState(readmes[docVersions[0]])

  const onSwitchVersion = useCallback((nVersion)=> {
    setSelectedVersion(nVersion)
    setReadme(readmes[nVersion])
  }, [])
  
  return (
    <AppContext.Provider value={{pkgPath, pkgJson, arreConfig, versions, selectedVersion, readme, onSwitchVersion}}>
      <Docs readme   = {readme}/>
    </AppContext.Provider>
  )
}


export default AppDocs


import React, {useState, useCallback} from 'react'
import AppContext from 'app/context/AppContext.mjs'
import Docs from 'app/pages/docs/Docs.jsx'


const AppDocs = ({pkgPath, pkgJson, arreConfig, readmes}) => {

  const [versions, setVersions]= useState(arreConfig.doc_versions)
  const [selectedVersion, setSelectedVersion]= useState(arreConfig.doc_versions[0])
  const [readme, setReadme]= useState(readmes[arreConfig.doc_versions[0]])

  const onSwicthVersion = useCallback((nVersion)=> {
    setSelectedVersion(nVersion)
    setReadme(readmes[nVersion])
  }, [])
  
  return (
    <AppContext.Provider value={{pkgPath, pkgJson, arreConfig, versions, selectedVersion, readme, onSwicthVersion}}>
      <Docs readme   = {readme}/>
    </AppContext.Provider>
  )
}


export default AppDocs


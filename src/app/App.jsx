import React, {useState, useEffect, useCallback} from 'react'
import { Routes, Route } from 'react-router-dom'

import AppContext from './context/AppContext.mjs'
import {updateMetaTags} from './util/dom.mjs'
import { getReadme } from './util/readme.mjs'

import Demo from './pages/demo/Demo'
import Docs from './pages/docs/Docs'


// PREFETCH READMEs
// ==> when changing version, just README changes. 
// ===> logo, favico, arre config, etc is always the same


const App = ({pkgPath, pkgJson, arreConfig, README}) => {

  const [versions, setVersions]= useState(arreConfig.doc_versions)
  const [selectedVersion, setSelectedVersion]= useState(arreConfig.doc_versions[0])
  const [readme, setReadme]= useState(README || getReadme(pkgPath))

  // This can be done somehow statically. Never changes.
  useEffect(() => {
    updateMetaTags(arreConfig, pkgJson)
  }, [])
  
  const onSwicthVersion = useCallback((nVersion)=> {
    setSelectedVersion(nVersion)
  }, [])


  return (
    <AppContext.Provider value={{pkgJson, arreConfig, versions, selectedVersion, readme, onSwicthVersion}}>
      <Routes> 
        {arreConfig.has_demo
        ? <Route path={'/demo'} element={<Demo/>}/>
        : null
        }
        <Route path={'*'} 
               element={<Docs readme = {readme}/>}/>

      </Routes>
    </AppContext.Provider>
  )
}


export default App


import React, {useState, useCallback} from 'react'
import {
  BrowserRouter, Route, Routes
} from "react-router-dom"

import AppContext from 'app/context/AppContext.mjs'

//import Demo from 'app/pages/demo/Demo.jsx'
import Docs from 'app/pages/docs/Docs.jsx'



const App = ({pkgPath, pkgJson, arreConfig, readmes}) => {

  const [versions, setVersions]= useState(arreConfig.doc_versions)
  const [selectedVersion, setSelectedVersion]= useState(arreConfig.doc_versions[0])
  const [readme, setReadme]= useState(readmes[arreConfig.doc_versions[0]])

 
  const onSwicthVersion = useCallback((nVersion)=> {
    setSelectedVersion(nVersion)
    setReadme(readmes[nVersion])
  }, [])

  console.log('Rendering APP')
  
  return (
    <AppContext.Provider value={{pkgPath, pkgJson, arreConfig, versions, selectedVersion, readme, onSwicthVersion}}>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Docs readme   = {readme}/>}/>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}


export default App

/*
{arreConfig.has_demo
        ? <Route path="/demo" element={<Demo/>}/>
        : null}
        */

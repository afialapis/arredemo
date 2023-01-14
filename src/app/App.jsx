import React, {useState, useCallback} from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
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


  const router = createBrowserRouter(
    createRoutesFromElements(
       /*{arreConfig.has_demo
        ? <Route path={'/demo'} element={<Demo/>}/>
        : null
        }*/
        <Route path={'*'} 
               element={<Docs readme = {readme}/>}/>

    )
  );
    
  return (
    <AppContext.Provider value={{pkgPath, pkgJson, arreConfig, versions, selectedVersion, readme, onSwicthVersion}}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}


export default App


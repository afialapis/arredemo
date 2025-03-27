import React /*, {useState, useCallback}*/ from 'react'
import AppContext from 'app/context/AppContext.mjs'
import Demo from 'app/pages/demo/Demo.jsx'


const App = ({pkgPath, pkgJson, arreConfig}) => {

   
  return (
    <AppContext.Provider value={{pkgPath, pkgJson, arreConfig /*, versions, selectedVersion, readme, onSwitchVersion*/}}>
      <Demo/>
    </AppContext.Provider>
  )
}


export default App


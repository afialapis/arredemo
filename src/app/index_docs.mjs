import React from 'react'
import ReactDOM from 'react-dom'
import AppDocs from 'app/AppDocs.jsx'

import 'app/assets/scss/index.scss'

const pkgPath = '_PKG_PATH_'

const pkgJson = JSON.parse(`
  _PKG_JSON_
`)

const arreConfig = JSON.parse(`
_ARRE_CONFIG_
`)

_READMES_

ReactDOM.render(
  <AppDocs 
    pkgPath = {pkgPath}
    pkgJson = {pkgJson}
    arreConfig = {arreConfig}
    readmes = {readmes}      
  />,
  document.getElementById('arredemo-app'))

/*

// React 18

ReactDOM.createRoot(document.getElementById("arredemo-app")).render(
  <React.StrictMode>
    <AppDocs 
      pkgPath = {pkgPath}
      pkgJson = {pkgJson}
      arreConfig = {arreConfig}
      readmes = {readmes}      
    />
  </React.StrictMode>
);
*/


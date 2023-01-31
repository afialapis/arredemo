import React from 'react'
import ReactDOM from 'react-dom'
import AppDemo from 'app/AppDemo.jsx'

import 'app/assets/scss/index.scss'

const pkgPath = '_PKG_PATH_'

const pkgJson = JSON.parse(`
  _PKG_JSON_
`)

const arreConfig = JSON.parse(`
_ARRE_CONFIG_
`)


ReactDOM.createRoot(document.getElementById("arredemo-app")).render(
  <React.StrictMode>
    <AppDemo 
      pkgPath = {pkgPath}
      pkgJson = {pkgJson}
      arreConfig = {arreConfig}
      
    />
  </React.StrictMode>
);

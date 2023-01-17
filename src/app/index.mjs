import React from 'react'
import ReactDOM from 'react-dom'
import App from 'app/App.jsx'

import 'app/assets/scss/index.scss'

const pkgPath = '_PKG_PATH_'

const pkgJson = JSON.parse(`
  _PKG_JSON_
`)

const arreConfig = JSON.parse(`
_ARRE_CONFIG_
`)

_READMES_


ReactDOM.createRoot(document.getElementById("arredemo-app")).render(
  <React.StrictMode>
    <App 
      pkgPath = {pkgPath}
      pkgJson = {pkgJson}
      arreConfig = {arreConfig}
      readmes = {readmes}
    />
  </React.StrictMode>
);
  
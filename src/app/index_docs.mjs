import AppDocs from "app/AppDocs.jsx"
import { createRoot } from "react-dom/client"
import "app/assets/scss/index.scss"

const pkgPath = "_PKG_PATH_"

const pkgJson = JSON.parse(`
  _PKG_JSON_
`)

const arreConfig = JSON.parse(`
_ARRE_CONFIG_
`)

_READMES_

createRoot(document.getElementById("arredemo-app")).render(
  <AppDocs pkgPath={pkgPath} pkgJson={pkgJson} arreConfig={arreConfig} readmes={readmes} />
)

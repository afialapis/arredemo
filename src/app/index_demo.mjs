import AppDemo from "app/AppDemo.jsx"
import { createRoot } from "react-dom/client"

import "app/assets/scss/index.scss"

const pkgPath = "_PKG_PATH_"

const pkgJson = JSON.parse(`
  _PKG_JSON_
`)

const arreConfig = JSON.parse(`
_ARRE_CONFIG_
`)

createRoot(document.getElementById("arredemo-app")).render(
  <AppDemo pkgPath={pkgPath} pkgJson={pkgJson} arreConfig={arreConfig} />
)

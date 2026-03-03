import AppDemo from "app/AppDemo.jsx"
import { hydrateRoot } from "react-dom/client"

import "app/assets/scss/index.scss"

const pkgPath = "_PKG_PATH_"

const pkgJson = JSON.parse(`
  _PKG_JSON_
`)

const arreConfig = JSON.parse(`
_ARRE_CONFIG_
`)

hydrateRoot(
  document.getElementById("arredemo-app"),
  <AppDemo pkgPath={pkgPath} pkgJson={pkgJson} arreConfig={arreConfig} />
)

import { arreJsonPath, readJsonFileSync } from "#scripts/utils/io/json.mjs"
import { ArreConfigObj } from "./arreConfigObj.mjs"
import defaults from './defaults.mjs'

function getArreConfigFromJson (data, pkgPath) {
  const config= {
    ...defaults,
    ...data
  }
  return new ArreConfigObj(config, pkgPath)
}

function getArreConfigFromPkgPath (pkgPath) {
  const jsonPath = arreJsonPath(pkgPath)
  const data = readJsonFileSync(jsonPath)
  const config= {
    ...defaults,
    ...data
  }
  return new ArreConfigObj(config, pkgPath)
}

function getArreConfigFromAnswers (data, pkgPath) {
  const config= {
    ...defaults,
    ...data
  }
  return new ArreConfigObj(config, pkgPath)
}


export {getArreConfigFromJson, getArreConfigFromPkgPath, getArreConfigFromAnswers}
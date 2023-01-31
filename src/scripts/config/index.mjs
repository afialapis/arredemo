import { arreJsonPath, readJsonFileSync } from "#scripts/utils/io/json.mjs"
import { parseArreConfig } from "./parse.mjs"
import defaults from './defaults.mjs'


function getArreConfigFromPkgPath (pkgPath) {
  const jsonPath = arreJsonPath(pkgPath)
  const data = readJsonFileSync(jsonPath)
  const config= {
    ...defaults,
    ...data
  }
  return parseArreConfig(config, pkgPath)
}

function getArreConfigFromAnswers (data, pkgPath) {
  const config= {
    ...defaults,
    ...data
  }
  return parseArreConfig(config, pkgPath)
}


export {getArreConfigFromPkgPath, getArreConfigFromAnswers}
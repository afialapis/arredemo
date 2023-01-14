import { arreJsonPath, readJsonFileSync } from "../utils/io/json.mjs";
import { ArreConfigObj } from "./arreConfigObj.mjs";

function getArreConfigFromJson (data, pkgPath) {
  return new ArreConfigObj(data, pkgPath)
}

function getArreConfigFromPkgPath (pkgPath) {
  const jsonPath = arreJsonPath(pkgPath)
  const data = readJsonFileSync(jsonPath)
  return new ArreConfigObj(data, pkgPath)
}

function getArreConfigFromAnswers (data, pkgPath) {
  return new ArreConfigObj(data, pkgPath)
}


export {getArreConfigFromJson, getArreConfigFromPkgPath, getArreConfigFromAnswers}
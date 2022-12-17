import { arreJsonPath, readJsonFileSync } from "../utils/io/json.mjs";
import { ArreConfigObj } from "./arreConfigObj.mjs";


function getArreConfigFromPkgPath (pkgPath) {
  const jsonPath = arreJsonPath(pkgPath)
  const data = readJsonFileSync(jsonPath)
  return new ArreConfigObj(data)
}

function getArreConfigFromAnswers (data) {
  return new ArreConfigObj(data)
}


export {getArreConfigFromPkgPath, getArreConfigFromAnswers}
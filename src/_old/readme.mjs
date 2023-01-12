import path from 'path'
import {readFileSync} from 'fs'

function getReadme (pkgPath) {
  const readmePath = path.join(pkgPath, 'README.md')
  const readme = readFileSync(readmePath, {encoding: 'utf-8'})
  return readme
}

export {getReadme}
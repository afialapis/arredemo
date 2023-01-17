import path from 'path'
import { readJsonFile } from '../utils/io/json.mjs'
import fetchMdFiles from '../utils/fetch/fetchMdFiles.mjs'
import preparseMd from '../utils/md/preparseMd.mjs'

const loadArreDemoAppData = async (pkgPath, arreConfig) => {

  const jsonPath = path.join(pkgPath, 'package.json')
  const pkgJson = await readJsonFile(jsonPath)
  
  const pkgName = pkgJson.name
  const versions = arreConfig.doc_versions
  let readmes = await fetchMdFiles(pkgName, versions)

  for (const [version, md] of Object.entries(readmes)) {
    const md_parsed= preparseMd(md, pkgName, arreConfig)
    readmes[version]= md_parsed
  }


  return [pkgJson, readmes]
}

export {loadArreDemoAppData}
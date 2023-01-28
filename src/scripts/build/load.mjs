import path from 'path'
import {readFileSync} from 'fs'
import { readJsonFile } from '#scripts/utils/io/json.mjs'
import fetchMdFiles from '#scripts/utils/fetch/fetchMdFiles.mjs'
import preparseMd from '#scripts/utils/md/preparseMd.mjs'

const loadArreDemoAppData = async (pkgPath, arreConfig) => {

  const jsonPath = path.join(pkgPath, 'package.json')
  const pkgJson = await readJsonFile(jsonPath)
  
  const pkgName = pkgJson.name
  
  let versions = []
  let readmes = []

  // Local version/readme first
  const localMdPath= path.join(pkgPath, 'README.md')
  const localMd= readFileSync(localMdPath, {encoding:'utf8', flag:'r'})
  const localVersion= pkgJson.version || "0.0.1"

  if (! localMd.length) {
    throw new Error(`Uanble to find README.md, not even locally`)
  }

  readmes[localVersion]= preparseMd(localMd, pkgName, arreConfig)

  // Optional extra versions
  let extraVersions = []
  const confVersions= arreConfig?.doc_versions || []

  confVersions.map((v) => {
    if (v!=localVersion) {
      if (extraVersions.indexOf(v)<0) {
        extraVersions.push(v)
      }
    }
  })

  try{
    const extraReadmes= await fetchMdFiles(pkgName, extraVersions)

    for (const [v, md] of Object.entries(extraReadmes)) {
      const md_parsed= preparseMd(md, pkgName, arreConfig)
      readmes[v]= md_parsed
    }
  } catch(_) {}



  return [pkgJson, readmes]
}

export {loadArreDemoAppData}
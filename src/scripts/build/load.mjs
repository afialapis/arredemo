import path from 'path'
import {readFileSync} from 'fs'
import { readJsonFile } from '#scripts/utils/io/json.mjs'
import fetchMdFiles from '#scripts/utils/fetch/fetchMdFiles.mjs'
import preparseMd from '#scripts/utils/md/preparseMd.mjs'

const loadArreDemoAppData = async (pkgPath, arreConfig) => {

  const jsonPath = path.join(pkgPath, 'package.json')
  const pkgJson = await readJsonFile(jsonPath)
  
  const pkgName = pkgJson.name
  const versions = arreConfig.doc_versions
  let readmes = []
  try{
    readmes= await fetchMdFiles(pkgName, versions)
  } catch(e) {
    const localMdPath= path.join(pkgPath, 'README.md')
    const localMd= readFileSync(localMdPath, {encoding:'utf8', flag:'r'})

    if (! localMd.length) {
      throw new Error(`Uanble to find README.md, not even locally`)
    }
    versions.map((v) => {
      readmes[v]= localMd
    })

  }

  for (const [version, md] of Object.entries(readmes)) {
    const md_parsed= preparseMd(md, pkgName, arreConfig)
    readmes[version]= md_parsed
  }


  return [pkgJson, readmes]
}

export {loadArreDemoAppData}
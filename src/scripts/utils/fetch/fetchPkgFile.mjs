import getPkgFileUrl from './getPkgFileUrl.mjs'
import fetch from 'node-fetch'

export default async function fetchPkgFile(pkgName, version, filename= 'README.md') {

  const url= getPkgFileUrl(pkgName, version, filename)

  const resp= await fetch(url)
  if (resp.status!=200) {
    throw new Error(`Unable to fetch file ${url}`)
  }
  
  const md= await resp.text()
  return md
}
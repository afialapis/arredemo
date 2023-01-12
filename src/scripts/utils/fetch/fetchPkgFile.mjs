import getPkgFileUrl from './getPkgFileUrl.mjs'
import fetch from 'node-fetch'

export default async function fetchPkgFile(pkgName, version, filename= 'README.md') {

  const url= getPkgFileUrl(pkgName, version, filename)
  try {
    const resp= await fetch(url)
    const md= await resp.text()
    return md
  } catch(e) {
    console.error(`Error fetching file ${filename} from ${url}`)
    console.error(e)
    return ''
  }
}
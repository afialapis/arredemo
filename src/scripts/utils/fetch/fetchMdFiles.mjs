import fetchPkgFile from './fetchPkgFile.mjs'

export default async function fetchMdFiles(pkgName, versions) {

  const mds= {}
  for (const version of versions) {
    const md= await fetchPkgFile(pkgName, version, 'README.md')
    mds[version]= md
  }
  return mds
}

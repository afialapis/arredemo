export default function getPkgFileUrl(pkgName, version, filename= 'README.md') {
  return `https://unpkg.com/${pkgName}@${version}/${filename}`
}
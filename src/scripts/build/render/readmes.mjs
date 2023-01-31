const renderReadmes = (readmes) => {

  const _versionName = (v) => v.replace(/\./g, '_')
  const _versionMdName = (v) => `md_${_versionName(v)}`
  const _toB64 = (s) => Buffer.from(s).toString('base64')
  
  let output= ""

  Object.entries(readmes).map(([version, md]) => {
    const escapedMd= _toB64(md)
    output+= `const ${_versionMdName(version)} = decodeURIComponent(escape(window.atob(\`${escapedMd}\`)));\n`
  })

  output+= '\n\nconst readmes = {\n'

  Object.keys(readmes).map((version) => {
    output+= `"${version}": ${_versionMdName(version)},\n`
  })

  output+= '}\n\n'


  return output
}


export {renderReadmes}
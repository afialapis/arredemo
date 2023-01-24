import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { copyFolderSync } from '#scripts/utils/io/copy.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const _renderReadmes = (readmes) => {

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


const _renderIndexHtml = (source, dest, pkgJson, arreConfig) => {
  const title=pkgJson.name
  const descrip= pkgJson?.description || ''
  const kwords= pkgJson?.keywords || ''
  const author= pkgJson?.author || ''
  const web_url= pkgJson?.homepage || ''
  const logo_url= arreConfig.logo
  const favicon_ico_url= arreConfig.faviconIco
  const favicon_png_url= arreConfig.faviconPng
  const favicon_apple_url= arreConfig.faviconApple

  let html= fs.readFileSync(source, {encoding:'utf8', flag:'r'})

  html= html.replace(/_TITLE_/g, title)
  html= html.replace(/_DESCRIPTION_/g, descrip)
  html= html.replace(/_KEYWORDS_/g, kwords)
  html= html.replace(/_AUTHOR_/g, author)
  html= html.replace(/_URL_/g, web_url)
  html= html.replace(/_LOGO_/g, logo_url)
  html= html.replace(/_FAVICON_ICO_/g, favicon_ico_url)
  html= html.replace(/_FAVICON_PNG_/g, favicon_png_url)
  html= html.replace(/_FAVICON_APPLE_/g, favicon_apple_url)

  fs.writeFileSync(dest, html, {encoding:'utf8'})
}

const _renderIndexJs = (source, dest, pkgPath, pkgJson, arreConfig, readmes) => {
  let js= fs.readFileSync(source, {encoding:'utf8', flag:'r'})

  js= js.replace(/_PKG_PATH_/g, pkgPath)
  js= js.replace(/_PKG_JSON_/g, JSON.stringify(pkgJson, '\n', 2))
  js= js.replace(/_ARRE_CONFIG_/g, JSON.stringify(arreConfig.config, '\n', 2))
  js= js.replace(/_READMES_/g, _renderReadmes(readmes))

  fs.writeFileSync(dest, js, {encoding:'utf8'})
}


const _renderDemoJs = (source, dest, pkgPath, pkgJson, arreConfig, readmes) => {
  let js= fs.readFileSync(source, {encoding:'utf8', flag:'r'})

  js= js.replace(/_DEMO_ENTRY_/g, arreConfig.config.demo_entry)

  fs.writeFileSync(dest, js, {encoding:'utf8'})
}


const renderArreDemoApp = (pkgPath, pkgJson, arreConfig, readmes) => {
  const tmplFolder = path.join(__dirname, '../../app')
  const arreFolder = path.join(pkgPath, 'arredemo')
  const outFolder = path.join(arreFolder, '_temp')

  if (!fs.existsSync(arreFolder)) {
    fs.mkdirSync(arreFolder)
  }
  
  // render template /app to pkg/arredemo/_temp
  //  except index.html, wich already goes to pkg/arredemo/index.html
  copyFolderSync(tmplFolder, outFolder, (sourceEl, destEl) => {
    if ( ['index.html', 'demo.html', 'docs.html'].indexOf(path.basename(destEl))>=0) {
      return () => _renderIndexHtml(sourceEl, destEl.replace(`${path.sep}_temp`, ''), pkgJson, arreConfig)
    }
    if (['index_demo.mjs', 'index_docs.mjs'].indexOf(path.basename(destEl))>=0) {
      return () => _renderIndexJs(sourceEl, destEl, pkgPath, pkgJson, arreConfig, readmes)
    }
    if (['Demo.jsx'].indexOf(path.basename(destEl))>=0) {
      return () => _renderDemoJs(sourceEl, destEl, pkgPath, pkgJson, arreConfig, readmes)
    }
    return undefined
  })

  return outFolder  
}

const cleanArreDemoApp = (pkgPath) => {
  
  const arreFolder = path.join(pkgPath, 'arredemo')
  const outFolder = path.join(arreFolder, '_temp')
  
  fs.rmSync(outFolder, { recursive: true, force: true });
}


export {renderArreDemoApp, cleanArreDemoApp}
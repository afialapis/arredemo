import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const _renderReadmes = (readmes) => {

  const _versionName = (v) => 'v_'+v.replace(/\./g, '_')

  // let escaped= {}
  // Object.entries(readmes).map(([key, value]) => {
  //   escaped[key]= value.replace(/`/g, '\\')
  //   //escaped[key]= escape(value)
  // })
  
  
  let output= ""

  Object.entries(readmes).map(([version, md]) => {
    const escaped= md
    //.replace(/\n/g, '\n')
    .replace(/"/g, '\\\"')
    .replace(/`/g, '\\\`')

    output+= `const ${_versionName(version)} = \`${escaped}\`;\n`
  })

  output+= '\n\nconst readmes = {\n'

  Object.keys(readmes).map((version) => {
    output+= `"${version}": ${_versionName(version)},\n`
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
  js= js.replace(/_ARRE_CONFIG_/g, JSON.stringify(arreConfig, '\n', 2))
  js= js.replace(/_READMES_/g, _renderReadmes(readmes))

  fs.writeFileSync(dest, js, {encoding:'utf8'})

}



const renderArreDemoApp = (pkgPath, pkgJson, arreConfig, readmes) => {
  
  const appFolder = path.join(__dirname, '../../app')
  const outFolder = path.join(pkgPath, 'arredemo', '_temp')

  if (!fs.existsSync(outFolder)) {
    fs.mkdirSync(outFolder)
  }

  const _copyFolderSync = (source, dest) => {
    fs.readdirSync(source).forEach(element => {
      const sourceEl= path.join(source, element)
      const destEl = path.join(dest, element)
      if (fs.lstatSync(sourceEl).isFile()) {
        if (path.basename(element) == 'index.html') {
          _renderIndexHtml(sourceEl, destEl, pkgJson, arreConfig)
        } else if (path.basename(element) == 'index.mjs') {
          _renderIndexJs(sourceEl, destEl, pkgPath, pkgJson, arreConfig, readmes)
        } else {
          fs.copyFileSync(sourceEl, destEl)
        }
      } else {
        if (!fs.existsSync(destEl)){
          fs.mkdirSync(destEl)
        }
  
        _copyFolderSync(sourceEl, destEl)
      }
    })
  }


  _copyFolderSync(appFolder, outFolder) 

    
  return outFolder  
}

export {renderArreDemoApp}
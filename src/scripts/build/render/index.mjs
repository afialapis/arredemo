import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { copyFolderSync } from '#scripts/utils/io/copy.mjs'
import {renderReadmes} from './readmes.mjs'
import {renderIndexHtml} from './html.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)




const _renderIndexJs = (source, dest, pkgPath, pkgJson, arreConfig, readmes) => {
  let js= fs.readFileSync(source, {encoding:'utf8', flag:'r'})

  js= js.replace(/_PKG_PATH_/g, pkgPath)
  js= js.replace(/_PKG_JSON_/g, JSON.stringify(pkgJson, '\n', 2))
  js= js.replace(/_ARRE_CONFIG_/g, JSON.stringify(arreConfig, '\n', 2))
  js= js.replace(/_READMES_/g, renderReadmes(readmes))

  fs.writeFileSync(dest, js, {encoding:'utf8'})
}


const _renderDemoJs = (source, dest, pkgPath, pkgJson, arreConfig, readmes) => {
  let js= fs.readFileSync(source, {encoding:'utf8', flag:'r'})

  if (arreConfig.demo_entry!=null) {
    const s= `import TheTestDemo from '../../../../${arreConfig.demo_entry}'`
    js= js.replace(/_DEMO_IMPORT_/, s)
  }

  fs.writeFileSync(dest, js, {encoding:'utf8'})
}


const renderArreDemoApp = (pkgPath, pkgJson, arreConfig, readmes) => {
  const tmplFolder = path.join(__dirname, '../../../app')
  const arreFolder = path.join(pkgPath, 'arredemo')
  const outFolder = path.join(arreFolder, '_temp')

  if (!fs.existsSync(arreFolder)) {
    fs.mkdirSync(arreFolder)
  }
  
  // render template /app to pkg/arredemo/_temp
  //  except index.html, wich already goes to pkg/arredemo/index.html
  copyFolderSync(tmplFolder, outFolder, (sourceEl, destEl) => {
    if ( ['index.html'].indexOf(path.basename(destEl))>=0) {
      return () => renderIndexHtml(sourceEl, destEl.replace(`${path.sep}_temp`, ''), pkgJson, arreConfig)
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
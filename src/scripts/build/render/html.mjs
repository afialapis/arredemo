import fs from 'fs'
import Mustache from 'mustache'


const _renderIndexHtmlAs = (source, dest, pkgJson, arreConfig, bundle) => {
  const title=pkgJson.name
  const description= pkgJson?.description || ''
  const keywords= pkgJson?.keywords || ''
  const author= pkgJson?.author || ''
  const url= pkgJson?.homepage || ''
  const logo= arreConfig.logo.dest
  const favicon_main= arreConfig.favicon.main?.dest
  const favicon_ico= arreConfig.favicon.ico?.dest
  const favicon_apple= arreConfig.favicon.apple?.dest

  const tmpl= fs.readFileSync(source, {encoding:'utf8', flag:'r'})

  const data= {
    title,
    description,
    keywords,
    author,
    url,
    logo,
    favicon_main,
    favicon_ico,
    favicon_apple,
    bundle
  }
  const html = Mustache.render(tmpl, data)

  fs.writeFileSync(dest, html, {encoding:'utf8'})
}


const renderIndexHtml = (source, dest, pkgJson, arreConfig) => {
  _renderIndexHtmlAs(source, dest, pkgJson, arreConfig, 'arredemo_docs.js')
  _renderIndexHtmlAs(source, dest.replace('index.html', 'docs.html'), pkgJson, arreConfig, 'arredemo_docs.js')
  _renderIndexHtmlAs(source, dest.replace('index.html', 'demo.html'), pkgJson, arreConfig, 'arredemo_demo.js')

}

export {renderIndexHtml}
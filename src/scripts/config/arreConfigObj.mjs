import path from 'path'
import { existsSync } from 'fs'

const _exists = (p, pkgPath) => {
  try {
    if (existsSync(path.join(pkgPath, p))) {
      return true
    }
  } catch(_) { }
  return false  
}

export class ArreConfigObj {
  constructor(config, pkgPath) {
    this.config= config
    this.pkgPath= pkgPath
  }

  get theme() {
    return this.config.theme || 'default'
  }

  get faviconIco() {
    const fav= this.config.favicon
    if (_exists(fav, this.pkgPath)) {
      return fav
    }
    return undefined
  }

  get faviconPng() {
    const ico= this.faviconIco
    if (!ico) {
      return undefined
    }
    const png_name= path.basename(ico, '.ico') + '.png'
    const png=  ico.replace(path.basename(ico), png_name)
    if (_exists(png, this.pkgPath)) {
      return png
    }
    return undefined

  }
  
  get faviconApple() {
    const ico= this.faviconIco
    if (!ico) {
      return undefined
    }
    const png_name= path.basename(ico, '.ico') + '_apple.png'
    const png=  ico.replace(path.basename(ico), png_name)
    if (_exists(png, this.pkgPath)) {
      return png
    }
    return undefined
  }


  get logo() {
    const logo= this.config.logo
    if (_exists(logo, this.pkgPath)) {
      return logo
    }
    return undefined
  }
  
  get company() {
    return this.config.company || ''
  }
  
  get url() {
    return this.config.url || ''
  }  

  get doc_versions() {
    return this.config.doc_versions
  }
  
  get has_demo() {
    return this.demo_entry != ''
  }
  
  get demo_entry() {
    const demo_js= this.config.demo_entry
    console.log('demo_entry???? + ' + demo_js)
    if (_exists(demo_js, this.pkgPath)) {
      return demo_js
    }
    return undefined    
  }  

  get demo_styles() {
    const demo_css= this.config.demo_entry
    if (_exists(demo_css, this.pkgPath)) {
      return demo_css
    }
    return undefined   

  }
    
}
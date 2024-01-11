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

  get sourceFaviconIco() {
    const fav= this.config.favicon
    if (_exists(fav, this.pkgPath)) {
      return fav
    }
    return undefined
  }

  get sourceFaviconPng() {
    const ico= this.sourceFaviconIco
    if (!ico) {
      return undefined
    }
    const png_name= path.basename(ico, '.ico') + '.png'
    const png=  ico.replace(path.basename(ico), png_name)
    if (_exists(png, this.pkgPath)) {
      return png
    }
    return ico
  }
  
  get sourceFaviconApple() {
    const ico= this.sourceFaviconIco
    if (!ico) {
      return undefined
    }
    const png_name= path.basename(ico, '.ico') + '_apple.png'
    const png=  ico.replace(path.basename(ico), png_name)
    if (_exists(png, this.pkgPath)) {
      return png
    }
    return ico
  }

  get destFaviconIco() {
    const ico= this.sourceFaviconIco
    if (!ico) {
      return undefined
    }
    return path.basename(ico)
  }

  get destFaviconPng() {
    const png= this.sourceFaviconPng
    if (!png) {
      return undefined
    }
    return path.basename(png)
  }


  get destFaviconApple() {
    const apple= this.sourceFaviconApple
    if (!apple) {
      return undefined
    }
    return path.basename(apple)
  }

  get sourceLogo() {
    const logo= this.config.logo
    if (_exists(logo, this.pkgPath)) {
      return logo
    }
    return undefined
  }

  get destLogo() {
    const logo= this.sourceLogo
    if (!logo) {
      return undefined
    }
    return path.basename(logo)
  }

  
  get company() {
    return this.config.company || ''
  }
  
  get company_url() {
    return this.config.company_url || ''
  }
  
  get url() {
    return this.config.url || ''
  }  

  get doc_versions() {
    return this.config?.doc_versions || []
  }
  
  get has_demo() {
    return (this.demo_entry != '') && (this.demo_entry != undefined)
  }

  get md_keep_summary_content() {
    return this.config?.md?.keep_summary_content || false
  }

  get md_strip_details_tag() {
    return ! (this.config?.md?.strip_details_tag===false)
  }
  
//  get demo_entry() {
//    const demo_js= this.config.demo_entry
//    console.log('demo_entry???? + ' + demo_js)
//    if (_exists(demo_js, this.pkgPath)) {
//      return demo_js
//    }
//    return undefined    
//  }  
//
    
}
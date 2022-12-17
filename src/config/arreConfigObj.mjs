export class ArreConfigObj {
  constructor(config) {
    this.config= config
  }

  get theme() {
    return this.config.theme || 'default'
  }

  get faviconIco() {
    return this.config.favicon
  }

  get faviconPng() {
    return this.config.favicon
  }
  
  get faviconApple() {
    return this.config.favicon
  }


  get logo() {
    return this.config.logo
  }
  
  get company() {
    return this.config.company
  }
  
  get url() {
    return this.config.url
  }  

  get doc_versions() {
    return this.config.doc_versions
  }
  
  get has_demo() {
    return this.demo_entry != ''
  }
  
  get demo_entry() {
    return this.config.demo_entry
  }  
}
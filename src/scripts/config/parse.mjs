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

const _parseImg = (pkgPath, imgPath, destBasename) => {
  let parsed = {
    ok: false
  }

  if (imgPath && _exists(imgPath, pkgPath)) {
    parsed.ok  = true
    parsed.src = imgPath
    
    const imgExt= path.extname(imgPath)
    parsed.dest= `${destBasename}${imgExt}`
  }
  return parsed
}

const parseArreConfig = (config, pkgPath) => {

  // UI

  const theme = config?.theme || 'default'
  const company = config?.company || ''
  const url = config?.url || ''

  // Docs

  const doc_versions = config?.doc_versions || []
  const md= {
    md_keep_summary_content: config?.md?.keep_summary_content || false,
    md_strip_details_tag: ! (config?.md?.strip_details_tag===false)
  }
  
  // Demo

  const demo_entry = config?.demo_entry || ''
  const has_demo = demo_entry != ''
  
  // Logo and favicons
  const logo = _parseImg(pkgPath, config?.logo, 'logo') 
  const faviconMain = _parseImg(pkgPath, config?.favicon, 'favicon') 

  let faviconIco= undefined
  let faviconApple= undefined

  if (faviconMain.ok) {
    if (path.extname(faviconMain.src)=='.ico') {
      faviconIco= faviconMain
    } else {
      const icoBaseName= path.basename(faviconMain.src, path.extname(faviconMain.src)) + '.ico'
      const icoPath=  faviconMain.src.replace(path.basename(faviconMain.src), icoBaseName)
      faviconIco= _parseImg(pkgPath, icoPath, 'favicon') 
    }

    const aplBaseName= path.basename(faviconMain.src, path.extname(faviconMain.src)) + '_apple.png'
    const aplPath=  faviconMain.src.replace(path.basename(faviconMain.src), aplBaseName)
    faviconApple= _parseImg(pkgPath, aplPath, 'favicon_apple')
  }

  return {
    theme,
    company,
    url,
    doc_versions,
    md,
    demo_entry,
    has_demo,
    logo,
    favicon: {
      main: faviconMain,
      ico: faviconIco,
      apple: faviconApple
    }
  }  
}

export {parseArreConfig}
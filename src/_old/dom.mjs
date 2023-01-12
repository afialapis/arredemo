const updateMetaTags = (arreConfig, pkgJson) => {
  if (document!=undefined) {
    document.title=pkgJson.name

    const descrip= pkgJson?.description || ''
    const kwords= pkgJson?.keywords || ''
    const author= pkgJson?.author || ''
    const web_url= pkgJson?.homepage || ''
    const logo_url= arreConfig.logo
    const favicon_ico_url= arreConfig.faviconIco
    const favicon_png_url= arreConfig.faviconPng
    const favicon_apple_url= arreConfig.faviconApple

    try {
      document.querySelector('link[rel="shortcut icon"]').setAttribute('href', favicon_ico_url)
    } catch(e) {}
    document.querySelector('link[rel="apple-touch-icon-precomposed"]').setAttribute('href', favicon_apple_url)
    document.querySelector('link[rel="icon"]').setAttribute('href', favicon_png_url)

    document.querySelector('meta[name="description"]').setAttribute('content', descrip)
    document.querySelector('meta[name="keywords"]').setAttribute('content', kwords)
    document.querySelector('meta[name="author"]').setAttribute('content', author)

    document.querySelector('meta[property="og:title"]').setAttribute('content', pkgJson.name)
    document.querySelector('meta[property="og:image"]').setAttribute('content', logo_url)
    document.querySelector('meta[property="og:url"]').setAttribute('content', web_url)
    document.querySelector('meta[property="og:site_name"]').setAttribute('content', web_url)
    document.querySelector('meta[property="og:description"]').setAttribute('content', descrip)
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', pkgJson.name)
    document.querySelector('meta[name="twitter:image"]').setAttribute('content', logo_url)
    document.querySelector('meta[name="twitter:url"]').setAttribute('content', web_url)
    document.querySelector('meta[name="twitter:text"]').setAttribute('content', descrip) 
  }  
}

export {updateMetaTags}
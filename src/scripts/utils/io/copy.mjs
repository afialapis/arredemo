import path from 'path'
import fs from 'fs'


const copyFolderSync = (source, dest, customCopyCallback) => {

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest)
  }

  fs.readdirSync(source).forEach(element => {
    const sourceEl= path.join(source, element)
    const destEl = path.join(dest, element)
    if (fs.lstatSync(sourceEl).isFile()) {
      const custCb = customCopyCallback(sourceEl, destEl)
      if (custCb) {
        custCb(sourceEl, destEl)
      } else {
        fs.copyFileSync(sourceEl, destEl)
      }
    } else {
      if (!fs.existsSync(destEl)){
        fs.mkdirSync(destEl)
      }

      copyFolderSync(sourceEl, destEl, customCopyCallback)
    }
  })
}



export {copyFolderSync}
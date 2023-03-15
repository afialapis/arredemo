import { /*red, green,*/ cyan} from 'farrapa/colors'
import { loadArreDemoAppData } from "./load.mjs"
import { renderArreDemoApp, cleanArreDemoApp } from "./render/index.mjs"
import { rollupArreDemoAppConfig } from "./rollup/prepare.mjs"
import { rollupBuild } from "./rollup/build.mjs"

async function makeArreDemoBuild (pkgPath, arreConfig) {

  /**
    Structure:

    phase 1: gather info
      - pkgPath
      - pkgJson
      - arreConfig
      - all the README based on supported versions
    
    phase 2: render app
      - copy everyfile from src/app
      - to package/arredemo/_temp
      - index.mjs and index.html need some str replace with data got on phase 1
    
    phase 3: build app
      - from rendered package/arredemo/_temp
      - we get that struct:
    
        package/
          arredemo.json

          arredemo/
            index.html
            docs.html
            demo.html
            bundle.css
            bundle.js
            favicon.ico


  */
  
  console.log(`[arredemo] ${cyan('Loading data')}...`)
  const [pkgJson, readmes]= await loadArreDemoAppData(pkgPath, arreConfig)
  
  console.log(`[arredemo] ${cyan('Rendering app')}...`)
  const rendFolder = renderArreDemoApp(pkgPath, pkgJson, arreConfig, readmes) 
  
  console.log(`[arredemo] ${cyan('Building docs page')}...`)
  const [inputOptionsForDocs, outputOptionsListForDocs] = rollupArreDemoAppConfig(pkgPath, pkgJson, arreConfig, rendFolder, 'index_docs.mjs', 'arredemo_docs.js')
  const _buildOkForDocs = await rollupBuild(inputOptionsForDocs, outputOptionsListForDocs)

  if (arreConfig.has_demo) {
    console.log(`[arredemo] ${cyan('Building demo page')}...`)
    const [inputOptionsForDemo, outputOptionsListForDemo] = rollupArreDemoAppConfig(pkgPath, pkgJson, arreConfig, rendFolder, 'index_demo.mjs', 'arredemo_demo.js')
    const _buildOkForDemo = await rollupBuild(inputOptionsForDemo, outputOptionsListForDemo)  
  }

  console.log(`[arredemo] ${cyan('Cleaning')}...`)
  cleanArreDemoApp(pkgPath)

}
export {makeArreDemoBuild}
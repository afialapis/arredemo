import React, { /*useRef,*/ useState, useEffect } from 'react'
import Page from 'app/layout/Page.jsx'
// import parseMenu from './parseMenu.mjs'
// import useAppContext from 'app/context/useAppContext.mjs'
import TheDemoDemo from '../../../../demo/index.mjs'

const Demo = () => {
  //const {pkgPath, arreConfig} = useAppContext()
  //const demoRef= useRef(undefined)
  const [menu, setMenu]= useState([])

  
  //  console.log(pkgPath)
  //
  //  useEffect(() => {
  //    async function _renderDemo () {
  //      const demo_styles = arreConfig.demo_styles
  //      if (demo_styles) {
  //        await import(demo_styles)
  //      }
  //
  //      const demo_entry = `../${arreConfig.demo_entry}`
  //
  //      console.log(`DEMO. Importing ${demo_entry}`)
  //      const demoModule = await import(demo_entry)
  //      const DemoComponent = demoModule.default()
  //
  //      ReactDOM.render(<DemoComponent/>, document.getElementById('arredemo_demo'))
  //    }
  //    _renderDemo()
  //
  //  }, [])
  
  console.log(`Demo render`)

  return (
    <Page menu  = {menu}
          path = 'demo'> 
      <TheDemoDemo/>
    </Page>
  )
}

export default Demo
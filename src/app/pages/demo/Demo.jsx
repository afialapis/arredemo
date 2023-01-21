import React, { /*useRef,*/ useState/*, useEffect*/ } from 'react'
import Page from 'app/layout/Page.jsx'
// import parseMenu from './parseMenu.mjs'
//import useAppContext from 'app/context/useAppContext.mjs'

const Demo = () => {
  //const context = useAppContext()
  //const demoRef= useRef(undefined)
  const [menu, setMenu]= useState([])

  


  //  useEffect(() => {
  //    async function _renderDemo () {
  //      const demo_styles = context.arreConfig.demo_styles
  //      if (demo_styles) {
  //        await import(demo_styles)
  //      }
  //
  //      const demo_entry = context.arreConfig.demo_entry
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
      <div id="arredemo_demo"
           /*ref={demoRef}*/
           >

      </div>
    </Page>
  )
}

export default Demo
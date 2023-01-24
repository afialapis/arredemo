import React, { useCallback, useState } from 'react'
import Page from 'app/layout/Page.jsx'
import TheTestDemo from '../../../../_DEMO_ENTRY_'
import parseMenu from './parseMenu.mjs'

const Demo = () => {
  const [menu, setMenu]= useState([])

  const demoRef= useCallback((node) => {
    const nMenu= parseMenu(node)
    setMenu(nMenu)
  }, [])

  return (
    <Page menu  = {menu}
          path = 'demo'> 
      <div ref={demoRef}>
        <TheTestDemo/>
      </div>
    </Page>
  )
}

export default Demo
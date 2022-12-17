import React, { useRef, useState, useEffect } from 'react'
import Page from '../../layout/Page'
// import parseMenu from './parseMenu.mjs'
import useAppContext from '../../context/useAppContext.mjs'

const Demo = () => {
  const context = useAppContext()
  const demoRef= useRef(undefined)
  const [menu, setMenu]= useState([])


  console.log(`Demo render`)


  return (
    <Page menu  = {menu}> 
      <div id="docaine_demo"
           ref={demoRef}>

      </div>
    </Page>
  )
}

export default Demo
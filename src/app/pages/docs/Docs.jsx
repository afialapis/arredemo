import React, {useState, useEffect} from 'react'
import Page from 'app/layout/Page.jsx'
import DocsMd from './DocsMd.jsx'
import {getMenuFromMdDOM} from 'app/util/dom.mjs'

const Docs = ({readme}) => {
  const [menu, setMenu]= useState([])

  
  useEffect(() => {
    try {
      PR.prettyPrint()
    } catch(e) {}
  }, [readme])
  

  useEffect(() => {
    const nMenu = getMenuFromMdDOM()
    setMenu(nMenu)
  }, [])
  
  return (
    <Page menu = {menu}
          path = 'docs'>
      <DocsMd readme={readme}/>
    </Page>
  )
}

export default Docs
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

  console.log('NOW DOCS')

  return (
    <Page menu = {menu}>
      <DocsMd readme={readme}/>
    </Page>
  )
}

export default Docs
import React, {useState, useEffect, useCallback} from 'react'
import Page from 'app/layout/Page.jsx'
import DocsMd from './DocsMd.jsx'
import { stripHtml } from 'app/util/text.mjs'
//import useObservedMenu from './useObservedMenu.mjs'


const Docs = ({readme}) => {
  
  //const [menu, handleHeadingObserve]= useObservedMenu()

  const [menu, setMenu]= useState([])

  //  const handleHeadingObserve = useCallback((node) => {
  //    const oid= node.id
  //    //const exists= menu.findIndex(i => i.id==oid)
  //    //if (exists>=0) {
  //    //  console.log('exists.....skipping observe')
  //    //  return
  //    //}
  //
  //    const title= stripHtml(node.innerHTML.trim())
  //    const item= {
  //      id: oid,  
  //      title, 
  //      level: parseInt(node.tagName.replace('H','')),
  //      node
  //    }
  //
  //    console.log('before adding, menu has ' + menu.length + ' items')
  //    
  //    const nMenu= [
  //      ...menu,
  //      item
  //    ]
  //
  //    setMenu(nMenu)
  //
  //    console.log('adding menu item.... ' + item.id + ' for a ' + nMenu.length + ' items menu') 
  //  }, [menu])

 
  /*
  useEffect(() => {
    try {
      PR.prettyPrint()
    } catch(e) {}
  }, [readme])
  */

  useEffect(() => {
    console.log('Docs.useEffect. Creating menu.')
    const elements=Array.from(document.querySelectorAll('h1, h2, h3'))
    const nMenu= []
    for (const el of elements) {
      const oid= el.id
      const title= stripHtml(el.innerHTML.trim())
      const level=  parseInt(el.tagName.replace('H',''))
      const item= {
        id: oid,  
        title, 
        level,
        node: el
      }
      nMenu.push(item)
    }
    setMenu(nMenu)

  }, [])

  console.log('Docs: render. Menu length is ' + menu.length + ' and readme length is ' + readme.length)
  
  return (
    <Page menu = {menu}>
    
      <DocsMd readme={readme}
              /*onHeadingObserve={handleHeadingObserve}*//>
    </Page>
  )
}

export default Docs
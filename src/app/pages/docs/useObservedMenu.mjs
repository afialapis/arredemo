import {useState, useCallback} from 'react'
import { stripHtml } from 'app/util/text.mjs'

const useObservedMenu = () => {
  const [menu, setMenu]= useState([])

  const handleHeadingObserve = useCallback((node) => {
    const oid= node.id
    const exists= menu.findIndex(i => i.id==oid)
    if (exists>=0) {
      console.log('exists.....skipping observe')
      return
    }

    const title= stripHtml(node.innerHTML.trim())
    const item= {
      id: oid,  
      title, 
      level: parseInt(node.tagName.replace('H','')),
      node
    }

    let nMenu= [
      item,
      ...menu
    ]
    
    setMenu(nMenu)
  }, [menu])

  console.log('useObservedMenu.render... menu.length should increment: ' + menu.length)

  return [menu, handleHeadingObserve]
}

export default useObservedMenu
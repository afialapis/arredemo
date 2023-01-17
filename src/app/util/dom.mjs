import { stripHtml } from 'app/util/text.mjs'

const getMenuFromMdDOM = () => {
  const elements=Array.from(document.querySelectorAll('h1, h2, h3'))
  const menu= []
  for (const el of elements) {
    const oid= el.id
    const title= stripHtml(el.innerHTML.trim())
    const level=  parseInt(el.tagName.replace('H',''))
    const item= {
      id: oid,  
      title, 
      level,
      //node: el
    }
    menu.push(item)
  }
  return menu
}

const MENU_OFFSET = 64

const domScrollTo = (selector) => {
  const node= document.querySelector(selector)
  const rect= node.getBoundingClientRect()

  const to=  window.scrollY + (rect.y  - MENU_OFFSET)
  window.scrollTo({top: to, left: 0, behavior: 'smooth'})


  /*
  const node= menu[idx].node
  node.scrollIntoView()

  const wy= window.scrollY
  window.scrollTo(0, wy - MENU_OFFSET)
  */
}


export {getMenuFromMdDOM, domScrollTo}
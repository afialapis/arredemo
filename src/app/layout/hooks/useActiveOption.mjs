import {useState, useEffect, useCallback} from 'react'
import useScroll from 'app/layout/hooks/useScroll.mjs'

const MENU_OFFSET = 64

const _getMenuItemYCoordinate = (item) => {
  let node
  try {
    node = document.querySelector(`#${item.id}`)
  } catch(_) {}
  if (! node) {
    return 0
  }
  //const rect= item.node.getBoundingClientRect()
  //const top=  item.node.offsetTop
  const rect= node.getBoundingClientRect()
  const top=  node.offsetTop
  const height= rect.height
  const middle= top + (height/2) // half so it does not get inside view just when padding is shown
  //const bottom= rect.bottom
  // return {
  //   //top,
  //   middle,
  //   //bottom,
  //   //height
  // }
  return middle

}


const _getMenuCoordinates = (menu) => {
  const coords= menu.map((e, idx) => {
    const y= _getMenuItemYCoordinate(e)
    return {
      index : idx,
      id    : e.id, //e.node.id,
      y
    }
  })
  
  return coords
}


const _findActiveOption = (menu) => {

  let aOption= undefined

  if (menu.length>0) {

    const screenTop= window.pageYOffset 
    const screenHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - MENU_OFFSET
    const screenBottom= screenTop + screenHeight

    // console.log(`scr ${screenTop} -> ${screenBottom} (${screenHeight}) `)

    const coords= _getMenuCoordinates(menu)

    // console.log(coords.map(c => `${c.id}-${c.top}`).join('\n'))
    
    /*
    const inside= coords.filter((e) => {
      return (e.bottom>=screenTop && e.top<=screenBottom)
    })
    */
    
    const inside= coords.filter((e) => {
      return (e.y>=screenTop && e.y<=screenBottom)
    })

    //console.log(inside)

    if (inside.length>0) {
      const opt= inside.slice(0,1)[0]
      aOption= opt.index
    } else {
      const previous= coords.filter((e) => {
        return (e.y<screenTop)
      })
      if (previous.length>0) {
        const opt= previous.slice(-1)[0]
        aOption= opt.index
      }
    }
  }
  
  if (aOption==undefined) {
    if (menu.length>0) {
      if (window.pageYOffset < MENU_OFFSET) {
        aOption= 0
      } else {
        aOption= menu.length-1
      }
    }
  }

  // console.log('Page: _findActiveOption ' + aOption)

  return aOption
}


const useActiveOption = (menu) => {
  const [activeOption, setActiveOption]= useState(0)
  
  const updateActiveOption = useCallback(() => {
    const nActiveOption= _findActiveOption(menu)
    setActiveOption(nActiveOption)    
  }, [menu])

      
  useEffect(() => {
    updateActiveOption() 
  }, [updateActiveOption])

  useScroll(updateActiveOption)


  return activeOption
}

export default useActiveOption

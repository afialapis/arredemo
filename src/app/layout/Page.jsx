import React, {useState, useEffect, useCallback} from 'react'
import {useLocation} from 'react-router-dom'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import useScroll from './hooks/useScroll.mjs'

const MENU_OFFSET = 64


const getPath = (loc) => loc.pathname.split('/')[1] == 'demo' ? 'demo' : 'docs'


const getMenuItemYCoordinate = (item) => {
  
  const rect= item.node.getBoundingClientRect()
  const top=  item.node.offsetTop
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


const getMenuCoordinates = (menu) => {
  const coords= menu.map((e, idx) => {
    const y= getMenuItemYCoordinate(e)
    return {
      index : idx,
      id    : e.node.id,
      y
    }
  })
  
  return coords
}


const findActiveOption = (menu) => {

  let aOption= undefined

  if (menu.length>0) {

    const screenTop= window.pageYOffset 
    const screenHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - MENU_OFFSET
    const screenBottom= screenTop + screenHeight

    // console.log(`scr ${screenTop} -> ${screenBottom} (${screenHeight}) `)

    const coords= getMenuCoordinates(menu)

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

  // console.log('Page: findActiveOption ' + aOption)

  return aOption
}


const Page = ({menu, children}) => {
  const location= useLocation()
  const [path, setPath]= useState(getPath(location))
  const [activeOption, setActiveOption]= useState(0)
  const [responsiveOpen, setResponsiveOpen]= useState(false)

  useEffect(() => {
    setPath(getPath(location))
  }, [location])
  

  const updateActiveOption = useCallback(() => {
    // console.log('Page: updateActiveOption')
    const nActiveOption= findActiveOption(menu)
    setActiveOption(nActiveOption)    
  }, [menu])

      
  useEffect(() => {
    updateActiveOption() 
  }, [updateActiveOption])

  useScroll(updateActiveOption)



  const handleOpenMenu = (idx) => {
    setResponsiveOpen(false)

    
    const node= menu[idx].node
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

  // console.log('Page : render ' + menu.length)


  return (
    <div className="main">
      <nav className="header">
        <Header 
          path  = {path}
          responsiveOpen= {responsiveOpen}
          onResponsiveToggle= {(show) => setResponsiveOpen(show)}
          />
      </nav>

    
      {!responsiveOpen
        ? <div className="body">
            <aside>
              <Menu 
                    path            = {path}
                    menu            = {menu}
                    onMenuClick     = {handleOpenMenu}
                    activeOption    = {activeOption}/>
              <Footer/>
            </aside>


            <div className="content">
              {children}
            </div>
        </div>
      :  <>
          <div className="body">
            <Menu 
                  path            = {path}
                  menu            = {menu}
                  onMenuClick     = {handleOpenMenu}
                  activeOption    = {activeOption}/>
                            
            </div>
            <div className="content">
              {children}
            </div>
            <Footer/>
          </>
          
      } 
        
      
    </div>
  )
}

export default Page

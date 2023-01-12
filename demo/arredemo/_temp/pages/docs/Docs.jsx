import React, {useEffect} from 'react'
import Page from 'app/layout/Page'
import DocsMd from './DocsMd'
import useObservedMenu from './useObservedMenu.mjs'


const Docs = ({readme}) => {
  
  const [menu, handleHeadingObserve]= useObservedMenu()
 
  useEffect(() => {
    try {
      PR.prettyPrint()
    } catch(e) {}
  }, [readme])
  

  // console.log('Docs: render ' + md.length)

  return (
    <Page menu = {menu}>
    
      <DocsMd readme={readme}
              onHeadingObserve={handleHeadingObserve}/>
    </Page>
  )
}

export default Docs
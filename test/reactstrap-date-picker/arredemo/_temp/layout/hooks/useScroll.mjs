import {useEffect, useState} from 'react'

const useScroll = (callback, delay= 30) => {

  const [lastUpdate, setLastUpdate]= useState(0)

  useEffect(() => {
    const onScroll = (event) => {  

      const wpos= window.pageYOffset
      const diff= Math.abs(wpos - lastUpdate)
      if (diff>=delay) {
        setLastUpdate(wpos)
        callback(event)
      }
      
    } 

    window.addEventListener('scroll', onScroll, { passive: true })   

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [callback, lastUpdate, delay]) 

}


export default useScroll

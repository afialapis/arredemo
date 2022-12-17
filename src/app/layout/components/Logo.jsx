import React from 'react'
import useAppContext from '../../context/useAppContext.mjs'

const Logo = () => {
  
  const context = useAppContext()
  const logo= context.arreConfig.logo

  if (!logo) {
    return (
      null
    )
  }

  return (
    <div className="logo">
      <img src={logo}/>
    </div>
  )
}


export default Logo
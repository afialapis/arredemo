import React from 'react'
import useAppContext from 'app/context/useAppContext.mjs'

const Logo = () => {
  
  const {arreConfig} = useAppContext()

  const logo_url = arreConfig.logo.ok 
    ? `url("${arreConfig.logo.dest}")` 
    : undefined

  if (!logo_url) {
    return (
      null
    )
  }

  return (
    <div className="logo"  style={{backgroundImage: logo_url}}>
      {/*<img src={logo}/>*/}
    </div>
  )
}


export default Logo
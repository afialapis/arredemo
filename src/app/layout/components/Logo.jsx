import React from 'react'
import useAppContext from 'app/context/useAppContext.mjs'

const Logo = () => {
  
  const context = useAppContext()
  const logo= `../${context.arreConfig.logo}`

  if (!logo) {
    return (
      null
    )
  }

  return (
    <div className="logo"  style={{backgroundImage: logo}}>
      {/*<img src={logo}/>*/}
    </div>
  )
}


export default Logo
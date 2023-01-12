import React from 'react'
import useAppContext from 'app/context/useAppContext.mjs'

const Badges = () => {

  
  const context = useAppContext()
  const pkgName = context.pkgJson.name

  return (

    <div className="badges">

      <span className="badge">
        <a href={`https://www.npmjs.com/package/${pkgName}`}>
          <img alt="NPM Version" 
                src={`https://badge.fury.io/js/${pkgName}.svg`}/>
        </a>
      </span>
      {/*
      <span className="badge">
        <a href={`https://david-dm.org/afialapis/${pkgName}`}>
          <img alt="Dependency Status" 
                src={`https://david-dm.org/afialapis/${pkgName}.svg`}/>
        </a>
      </span>
      */}
      <span className="badge">
        <a href={`https://www.npmjs.com/package/${pkgName}`}>
          <img alt="NPM Downloads" 
                src={`https://img.shields.io/npm/dm/${pkgName}.svg?style=flat`}/>
        </a>
      </span>
    </div>
  )
}

export default Badges

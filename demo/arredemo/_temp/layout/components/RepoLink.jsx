import React from 'react'
import useAppContext from 'app/context/useAppContext.mjs'

const RepoLink = () => {
  
  const context = useAppContext()
  const repo = context.pkgJson.repository

  if (repo) {
    if (repo.type=='git') {
      if (repo.url.indexOf('github')>=0) {
        return (
            <a className="link github" 
              href     = {repo.url}
              target   = "_blank"
              rel      = "noreferrer">
              <img src="assets/images/github.png" />
              <span>{'Github'}</span>
            </a>        
        )
      }
    }
  }
  return null
}

export default RepoLink
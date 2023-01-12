import React from 'react'
import useAppContext from 'app/context/useAppContext.mjs'
import Badges from 'app/layout/components/Badges'

const Company = ({company, url}) =>
  <a href={url} target="_blank noopener noreferrer">{company}</a>

const License = ({name}) =>
  <a href={`https://opensource.org/licenses/${name}`} target="_blank noopener noreferrer">{name}</a>



const Footer = () => {
  
  const context = useAppContext()
  const company= context.arreConfig.company
  const license= context.pkgJson.license
  const pkgName = context.pkgJson.name
  
  return (
    <footer>
      <Badges/>
      <div>
        {`${pkgName} is sharpened by `}<Company company= {company} url= {url}/> under <License name={license}/> license
      </div>
    </footer>
  )
}

export default withContext(Footer)
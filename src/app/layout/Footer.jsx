import React from 'react'
import useAppContext from 'app/context/useAppContext.mjs'
import Badges from 'app/layout/components/Badges.jsx'

const Company = ({company, url}) =>
  <a href={url} target="_blank noopener noreferrer">{company}</a>

const License = ({name}) =>
  <a href={`https://opensource.org/licenses/${name}`} target="_blank noopener noreferrer">{name}</a>



const Footer = () => {
  const context = useAppContext()
  const company= context.arreConfig.company
  const url= context.arreConfig.url
  const license= context.pkgJson.license
  const pkgName = context.pkgJson.name
  
  return (
    <footer>
      <Badges/>
      <div className="license">
        <span className="package-name">{pkgName}</span> is sharpened by <Company company= {company} url= {url}/> under <License name={license}/> license.
        This site was built using <a href={`https://arredemo.afialapis.com`} target="_blank noopener noreferrer"><span className="package-name">arredemo</span></a>.
      </div>
    </footer>
  )
}

export default Footer
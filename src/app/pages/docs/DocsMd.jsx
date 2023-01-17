import React from 'react'
import Markdown from 'markdown-to-jsx'
import options from './mdOptions.mjs'

const DocsMd = ({readme}) => {

  return (
    <Markdown options={options}>{readme}</Markdown>
  )
}

export default DocsMd
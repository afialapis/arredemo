import React from 'react'
import Markdown from 'markdown-to-jsx'
import { slugify } from 'app/util/text.mjs'

const WrapperP = (props) => {
  return (
    <div {...props}/>
  )
}

const DocsMd = ({readme}) => {
  const options= {
    overrides: {
      section: {
        props: {
          className: 'doc-section'
        },
      },
      article: {
        props: {
          className: 'doc-article'
        },
      },
      pre: {
        props: {
          className: 'prettyprint'
        },
      },
      p: {
        component: WrapperP
      }
    }, 
    slugify: slugify 
  }

  
  return (
    <Markdown options={options}>{readme}</Markdown>
  )
}

export default DocsMd
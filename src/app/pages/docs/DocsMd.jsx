import React, {useEffect} from 'react'
import Markdown from 'markdown-to-jsx'
import ObservedHeading from './ObservedHeading.mjs'
import { slugify } from 'app/util/text.mjs'

const DocsMd = ({readme, onHeadingObserve}) => {


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
      /*
      h1: {
        component: ObservedHeading,
        props: {
          Tag: 'h1',
          onHeadingObserve
        }
      },
      h2: {
        component: ObservedHeading,
        props: {
          Tag: 'h2',
          onHeadingObserve
        }
      },
      h3: {
        component: ObservedHeading,
        props: {
          Tag: 'h3',
          onHeadingObserve
        }
      }
      */
    }, 
    slugify: slugify 
  }

  return (
    <Markdown options={options}>{readme}</Markdown>
  )
}

export default DocsMd
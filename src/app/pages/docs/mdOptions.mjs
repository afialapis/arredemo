import { slugify } from 'app/util/text.mjs'

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

export default options
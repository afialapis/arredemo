import { slugify } from "./text.mjs"

const options = {
  overrides: {
    pre: {
      props: {
        className: "prettyprint"
      }
    }
  },
  slugify: slugify
}

export default options

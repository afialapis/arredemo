import mainQuestions from './main.mjs'
import docsQuestions from './docs.mjs'
import demoQuestions from './demo.mjs'

export default [
  ...mainQuestions,
  ...docsQuestions,
  ...demoQuestions
]


/*

{
  "theme": "default",
  "favicon": "logo/favicon/valium.ico",
  "favicon": {
    "ico": "logo/favicon/valium.ico",
    "png": "logo/favicon/valium.png",
    "apple": "logo/favicon/valium_apple.png"
  },
  "logo": "logo/valium.png",
  "company": "afialapis.com",
  "url": "http://www.afialapis.com"
  
  "doc_versions": ["0.0.50", "0.0.60", "0.0.61", "0.0.62"],

  "demo_entry": "demo/index.js",
}
*/
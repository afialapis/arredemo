import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const aliases = {
  app: path.join(__dirname, "./src/app")
}

const _BABEL= { 
  "presets": [
    ["@babel/preset-env", {"targets": {"esmodules": true}}],
    "@babel/preset-react"
  ],
  "plugins": [
    ["babel-plugin-module-resolver", {
      "root": [path.resolve('./src')],
      "alias": aliases
    }],    
  ]
}

export default _BABEL

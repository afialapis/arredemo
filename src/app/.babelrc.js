import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const aliases = {
  app: path.join(__dirname, '.')
}

const _BABEL= { 
  'presets': [
    ['@babel/preset-env', {'targets': {'esmodules': true}}],
    '@babel/preset-react'
  ],
  'plugins': [
    ['babel-plugin-module-resolver', {
      'root': [path.resolve('.')],
      'extension': [
          '.js',
          '.cjs',
          '.mjs',
          '.jsx'
      ],
      'alias': aliases
    }],    
  ]
}

export default _BABEL

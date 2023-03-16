import path from 'path'
import { fileURLToPath } from 'url'
import alias_plugin from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import {babel} from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import scss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy'
import terser from '@rollup/plugin-terser'

const NODE_ENV = 'production'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


//const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js');

function toTitleCase(str) {
  let s= str.replace(
    /\w*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  )
  s= s.charAt(0).toLowerCase() + s.substr(1);
  s= s.replace(/-/g,'')
  return s
}

function _imgCopyTargets (arreConfig) {
  let targets= []
  const _checkI = (src, dest) => {
    if (src!=undefined) {
      targets.push({
        src, dest: 'arredemo', rename: dest
      })
    }
  }
  _checkI(arreConfig.favicon.main?.src, arreConfig.favicon.main?.dest)
  _checkI(arreConfig.favicon.ico?.src, arreConfig.favicon.ico?.dest)
  _checkI(arreConfig.favicon.apple?.src, arreConfig.favicon.apple?.dest)
  _checkI(arreConfig.logo?.src, arreConfig.logo?.dest)

  return targets
}

function rollupArreDemoAppConfig(pkgPath, pkgJson, arreConfig, rendFolder, inputName, outputName) {
  //const pkgJsonPath= path.join(pkgPath, 'package.json')
  //const input= arreConfig.demo_entry

  const input = path.join(rendFolder, inputName)

  const outFolder = path.join(pkgPath, 'arredemo')
  const output= path.join(outFolder, outputName)

  const inputOptions= {
    input,
    plugins: [
      alias_plugin({
        entries: [{
          find: 'app', replacement: rendFolder
        }]
      }),
      json(),
      babel({
        // Babel resolution involves just arredemo folders
        cwd: path.join(__dirname, '../../../..'), 
        
        exclude: /node_modules/,
        
        /*https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers*/
        babelHelpers: 'bundled',

        presets: [
          ["@babel/preset-env", { 
            bugfixes: true,
            loose: true 
          }],
          ['@babel/preset-react']
        ]
      }),      
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      nodeResolve({
        rootDir: rendFolder, // pkgPath,
        exportConditions: ['node'],
      }),
      commonjs({
        esmExternals: true
      }),
      scss(),

      copy({
        targets: _imgCopyTargets (arreConfig)
      })
    ],
    external: ['react', 'react-dom', 'markdown-to-jsx']
  }
  
  const outputs= [
    {
      //file: minifyExtension(output),
      file: output,
      format: 'iife',
      exports: 'named',
      sourcemap: true,
      name: toTitleCase(pkgJson.name),   
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'markdown-to-jsx': 'MarkdownToJSX',
      },
      plugins: [
        terser({ ecma: 8, safari10: true })
      ],
    }   
  ]
  
  return[inputOptions, outputs]
}


export {
  rollupArreDemoAppConfig
}
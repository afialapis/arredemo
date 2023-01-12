import path from 'path'
import alias_plugin from '@rollup/plugin-alias';
import {externals} from 'rollup-plugin-node-externals'
import replace from '@rollup/plugin-replace'
import {babel} from '@rollup/plugin-babel'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
// import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-postcss'
const NODE_ENV = 'production'


const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js');

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


// const makeGlobals = (pkgJson) => {
//   const pkgs= Object.keys(pkgJson?.dependencies || [])
//   const globals= {}
//   pkgs.map((n) => {
//     globals[n]= toTitleCase(n)
//   })
//   return globals
// }


function rollupArreDemoAppConfig(pkgPath, pkgJson, arreConfig, rendFolder) {
  const bundleDeps= true
  const pkgJsonPath= path.join(pkgPath, 'package.json')
  //const input= arreConfig.demo_entry

  const input = path.join(rendFolder, 'index.mjs')

  const outFolder = path.join(pkgPath, 'arredemo')
  const output= path.join(outFolder, 'bundle.js')

  const inputOptions= {
    input,
    plugins: [
      alias_plugin({
        entries: [{
          find: 'app', replacement: rendFolder
        }]
      }),
      babel({
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
      //externals({
      //  packagePath: pkgJsonPath,
      //  deps: !bundleDeps,
      //  peerDeps: !bundleDeps
      //}),
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
      scss()
    ],
    external: ['react', 'react-dom', 'react-router-dom']
  }
  
  const outputs= [
    {
      file: output,
      format: 'iife',
      exports: 'named',
      sourcemap: true,
      name: toTitleCase(pkgJson.name),
      //globals: makeGlobals(pkgJson)      
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM'
      }
    },
    //{
    //  file: minifyExtension(output),
    //  format: 'iife',
    //  exports: 'named',
    //  plugins: [
    //    terser({ ecma: 8, safari10: true })
    //  ],
    //  name: toTitleCase(pkgJson.name),
    //  globals: makeGlobals(pkgJson)   
    //}    
  ]
  
  return[inputOptions, outputs]
}


export {
  rollupArreDemoAppConfig
}
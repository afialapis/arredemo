import { rollup } from 'rollup'
import {red, cyan, green} from 'tinguir'

async function _rollupGenerateOutputs(bundle, outputOptionsList) {
  for (const outputOptions of outputOptionsList) {
    // generate output specific code in-memory
    // you can call this function multiple times on the same bundle object
    // replace bundle.generate with bundle.write to directly write to disk
    const { _output } = await bundle.write(outputOptions)
    /*
    for (const chunkOrAsset of output) {
      if (chunkOrAsset.type === 'asset') {
        // For assets, this contains
        // {
        //   fileName: string,              // the asset file name
        //   source: string | Uint8Array    // the asset source
        //   type: 'asset'                  // signifies that this is an asset
        // }
        console.log('Asset', chunkOrAsset)
      } else {
        // For chunks, this contains
        // {
        //   code: string,                  // the generated JS code
        //   dynamicImports: string[],      // external modules imported dynamically by the chunk
        //   exports: string[],             // exported variable names
        //   facadeModuleId: string | null, // the id of a module that this chunk corresponds to
        //   fileName: string,              // the chunk file name
        //   implicitlyLoadedBefore: string[] // entries that should only be loaded after this chunk
        //   imports: string[],             // external modules imported statically by the chunk
        //   importedBindings: {[imported: string]: string[]} // imported bindings per dependency
        //   isDynamicEntry: boolean,       // is this chunk a dynamic entry point
        //   isEntry: boolean,              // is this chunk a static entry point
        //   isImplicitEntry: boolean,      // should this chunk only be loaded after other chunks
        //   map: string | null,            // sourcemaps if present
        //   modules: {                     // information about the modules in this chunk
        //     [id: string]: {
        //       renderedExports: string[] // exported variable names that were included
        //       removedExports: string[]  // exported variable names that were removed
        //       renderedLength: number    // the length of the remaining code in this module
        //       originalLength: number    // the original length of the code in this module
        //       code: string | null       // remaining code in this module
        //     }
        //   },
        //   name: string                   // the name of this chunk as used in naming patterns
        //   referencedFiles: string[]      // files referenced via import.meta.ROLLUP_FILE_URL_<id>
        //   type: 'chunk',                 // signifies that this is a chunk
        // }
        console.log('Chunk', chunkOrAsset.modules)
      }
    }
    */
  }
}

async function rollupBuild(inputOptions, outputOptionsList) {
  let bundle
  let buildOk = true

  try {
    // create a bundle
    const bundle = await rollup(inputOptions)

    // an array of file names this bundle depends on
    //console.log(bundle.watchFiles)

    await _rollupGenerateOutputs(bundle, outputOptionsList)
  } catch (error) {
    // do some error reporting
    buildOk = false
    console.error(red(error))
  }
  if (bundle) {
    // closes the bundle
    await bundle.close()
  }


  if (buildOk) {
    console.log(`[arredemo] Bundled ${cyan(outputOptionsList[0].file)} ${green('successfully!')}`)
  } else {
    console.log(`[arredemo] ${red('Error')} when bundling ${cyan(outputOptionsList[0].file)}`)
    process.exit(1)
  }  

  return buildOk
}


export {
  rollupBuild
}

#!/usr/bin/env node
/**
* Copyright (c) 2022-present, afialapis.com
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict'

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

import spawn from 'cross-spawn'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


import {globalHelp} from '#scripts/help/actions.mjs'


const args = process.argv.slice(2)

const arreActions= ['build', 'help', 'version']

const scriptIndex = args.findIndex(
  x => arreActions.indexOf(x) >= 0
)

const script = scriptIndex === -1 ? args[0] : args[scriptIndex]

if (arreActions.includes(script)) {
  const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : []
  const arreScript = path.resolve(__dirname, '../src/scripts/' + script + '/run.mjs')
  const arreArgs = args.slice(scriptIndex + 1)

  const call = nodeArgs
               .concat(arreScript)
               .concat(arreArgs)

  const result = spawn.sync(
    process.execPath,
    call,
    { stdio: 'inherit' }
  )
  if (result.signal) {
    if (result.signal === 'SIGKILL') {
      console.log(
        'The script failed because the process exited too early. ' +
          'This probably means the system ran out of memory or someone called ' +
          '`kill -9` on the process.'
      )
    } else if (result.signal === 'SIGTERM') {
      console.log(
        'The script failed because the process exited too early. ' +
          'Someone might have called `kill` or `killall`, or the system could ' +
          'be shutting down.'
      )
    }
    process.exit(1)
  }
  process.exit(result.status)
} else {
  
   process.exitCode = 1
   const msg= `Unknown script ${script}`
   const extra= `
     Perhaps you need to update arredemo?
     Check https://github.com/afialapis/arredemo
   `
   globalHelp({message: msg}, extra)
}
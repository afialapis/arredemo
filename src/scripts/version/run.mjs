

/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'
import path from 'path'
import { fileURLToPath } from 'url'
import {readFileSync} from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import {versionHelp} from '../help/actions.mjs'

(async () => {
  const arrePath = path.join(__dirname, '../../..')
  const arreJson = JSON.parse(readFileSync(path.join(arrePath, 'package.json'), {encoding:'utf8', flag:'r'}))

  console.log(arreJson.version)


  
})().catch((error) => {
  const pkgPath= process.env.PWD
  process.exitCode = 1
  versionHelp(pkgPath, error)
})




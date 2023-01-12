/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import {buildHelp} from '../help/actions.mjs'
import {arreInit} from './index.mjs'

(async () => {
  const pkgPath= process.env.PWD

  const injectValues = process.argv.slice(2)

  await arreInit(pkgPath, injectValues)

})().catch((error) => {
  const pkgPath= process.env.PWD

  process.exitCode = 1
  buildHelp(pkgPath, error)
})

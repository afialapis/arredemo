/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { buildHelp } from "#scripts/help/actions.mjs"
import { arreInit } from "#scripts/init/index.mjs"
// import { isDirectory } from "#scripts/utils/io/check.mjs"
import { makeArreDemoBuild } from "./index.mjs"

const _parse_args = () => {
  // let pkgPath = process.env.PWD
  // let injectIndex = 2
  // if (process.argv.length > 2 && isDirectory(process.argv[2])) {
  //   pkgPath = process.argv[2]
  //   injectIndex = 3
  // }
  // const injectValues = process.argv.slice(injectIndex)
  // return [pkgPath, injectValues]
  return [process.env.PWD, process.argv.slice(2)]
}

;(async () => {
  const [pkgPath, injectValues] = _parse_args()

  // Get or init the config
  const arreConfig = await arreInit(pkgPath, injectValues)

  // Save the build
  await makeArreDemoBuild(pkgPath, arreConfig)
})().catch((error) => {
  const [pkgPath, _injectValues] = _parse_args()

  process.exitCode = 1
  buildHelp(pkgPath, error)
})

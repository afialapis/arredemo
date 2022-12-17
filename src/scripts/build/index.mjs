/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import prompts from 'prompts'
import {initHelp} from '../help/actions.mjs'
import configQuestions from './questions/index.mjs'
import {stat} from 'fs/promises'
import { arreJsonPath } from '../../utils/io/json.mjs'
import { getArreConfigFromAnswers, getArreConfigFromPkgPath } from '../../config/index.mjs'
import { makeArreDemoBuild } from './make/index.mjs'


async function arreInit(pkgPath, injectValues) {
  let force = false

  // Inject values if any
  if (Array.isArray(injectValues)) {
    if ((injectValues!=undefined) && (injectValues.length>0) ) {
      const parsedValues= injectValues.map(v => 
        v=='true'
        ? true
        : v=='false'
          ? false
          : v)
      prompts.inject(parsedValues)
    }
  } else if (injectValues === true) {
    force = true
  }

  // Prepare config object, from existing files
  //  or after wizzard
  let arreConfig = undefined
  const jsonPath = arreJsonPath(pkgPath)
  const jsonPathStats= await stat(jsonPath)
  if (jsonPathStats.isFile() && (! force)) {
    arreConfig = getArreConfigFromPkgPath(pkgPath)
  } else {
    // Prompt questions
    const configAnswers = await prompts(configQuestions)
    arreConfig = getArreConfigFromAnswers(configAnswers)
  }

  // Save the build
  await makeArreDemoBuild(pkgPath, arreConfig)

}


(async () => {
  const pkgPath= process.env.PWD

  const injectValues = process.argv.slice(2)

  await arreInit(pkgPath, injectValues)

})().catch((error) => {
  const pkgPath= process.env.PWD

  process.exitCode = 1
  initHelp(pkgPath, error)
})

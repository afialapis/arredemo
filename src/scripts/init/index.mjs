/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import prompts from 'prompts'
import {existsSync, mkdirSync} from 'fs'
import path from 'path'
import { arreJsonPath, saveObjectToJsonWithConfirm } from '../utils/io/json.mjs'
import { getArreConfigFromAnswers, getArreConfigFromPkgPath } from '../config/index.mjs'
import configQuestions from './questions/index.mjs'


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

  if (existsSync(jsonPath) && !force) {
    arreConfig = getArreConfigFromPkgPath(pkgPath)
  } else {
    const jsonDir= path.dirname(jsonPath)
    if (!existsSync(jsonDir)){
      mkdirSync(jsonDir)
    }

    // Prompt questions
    const configAnswers = await prompts(configQuestions)
    arreConfig = getArreConfigFromAnswers(configAnswers, pkgPath)
    // Save the config
    saveObjectToJsonWithConfirm(jsonPath, configAnswers, true)
  }

  return arreConfig
}

export {arreInit}
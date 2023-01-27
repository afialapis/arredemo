import {buildHelp} from '#scripts/help/actions.mjs'
import { makeArreDemoBuild } from '#scripts/build/index.mjs'
import {arreInit} from '#scripts/init/index.mjs'

async function arredemo(pkgPath, config) {
  try {
    // Get or init the config
    const arreConfig = await arreInit(pkgPath, config)

    // Save the build
    await makeArreDemoBuild(pkgPath, arreConfig)
  } catch (error) {
    buildHelp(pkgPath, error)
  }
}

export default arredemo
import { readFileSync } from "node:fs"
import path from "node:path"
import fetchMdFiles from "#scripts/utils/fetch/fetchMdFiles.mjs"
import { readJsonFile } from "#scripts/utils/io/json.mjs"
import preparseMd from "#scripts/utils/md/preparseMd.mjs"

const loadArreDemoAppData = async (pkgPath, arreConfig) => {
  const jsonPath = path.join(pkgPath, "package.json")
  const pkgJson = await readJsonFile(jsonPath)

  const pkgName = pkgJson.name

  //const versions = []
  const readmes = []

  // Local version/readme first
  const localMdPath = path.join(pkgPath, "README.md")
  const localMd = readFileSync(localMdPath, { encoding: "utf8", flag: "r" })
  const localVersion = pkgJson.version || "0.0.1"

  if (!localMd.length) {
    throw new Error(`Uanble to find README.md, not even locally`)
  }

  readmes[localVersion] = preparseMd(localMd, pkgName, arreConfig)

  // Optional extra versions
  const extraVersions = []
  const confVersions = arreConfig?.doc_versions || []

  confVersions.forEach((v) => {
    if (v !== localVersion) {
      if (extraVersions.indexOf(v) < 0) {
        extraVersions.push(v)
      }
    }
  })

  try {
    const extraReadmes = await fetchMdFiles(pkgName, extraVersions)

    for (const [v, md] of Object.entries(extraReadmes)) {
      const md_parsed = preparseMd(md, pkgName, arreConfig)
      readmes[v] = md_parsed
    }
  } catch (_) {}

  return [pkgJson, readmes]
}

export { loadArreDemoAppData }

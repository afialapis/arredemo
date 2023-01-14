import fsPromises from 'fs/promises'
import {readFileSync} from 'fs'
import os from 'os'
import path from 'path'
import prompts from 'prompts'

const arreJsonPath = (pkgPath) => path.join(pkgPath, 'arredemo.json')

async function readJsonFile(jsonPath) {
  try {
    const data = await fsPromises.readFile(jsonPath)
    const obj = JSON.parse(data)
    return obj
  } catch (err){
    console.log(err)
    return {}
  }
}

function readJsonFileSync(jsonPath) {
  try {
    const data = readFileSync(jsonPath, {encoding:'utf8', flag:'r'})
    const obj = JSON.parse(data)
    return obj
  } catch (err){
    console.log(err)
    return {}
  }
}


function __objectToJson(config) {
  return JSON.stringify(config, null, 2) + os.EOL
}

function _objectToJs(config) {
  return `const _obj = ${__objectToJson(config)}; \n\n export default _obj;`
}

async function _saveFileWithConfirm(filename, content, force, message) {
  try {
    await access(filename)
    
    if (! force) {
      const questions= [{
        type: 'confirm',
        name: 'overwrite',
        message: message || `${path.basename(filename)} already exists. Do you wanrt to overwrite it?`,
        initial: false      
      }]

      const answers = await prompts(questions)

      if (answers.overwrite !== true) {
        return
      }
    }
  } catch(e) {}

  await fsPromises.writeFile(
    filename,
    content
  )
}

async function saveObjectToJsonWithConfirm(filename, obj, force) {
  await _saveFileWithConfirm(filename, __objectToJson(obj), force)
}

async function saveObjectToJsWithConfirm(filename, obj, force) {
  await _saveFileWithConfirm(filename, _objectToJs(obj), force)
}



export {arreJsonPath, readJsonFile, readJsonFileSync, saveObjectToJsonWithConfirm, saveObjectToJsWithConfirm}
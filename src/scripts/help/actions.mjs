import {blue_bold, 
  blue_light, 
  red_light, 
  red_bold} from 'tinguir'

const _bl= blue_light 
const _bb= blue_bold

function _prepare_text(text) {
  return text
    .split('\n')
    .map(line => line.replace(/^ +/,"")) // remove left spaces
    .join('\n')
    .replace(/\n\n\n/g, '\n\n') // remove doubled empty lines
}

function _log_text(text) {
  console.log(_prepare_text(text))
}

function _log_err(error= undefined) {
  if (error!=undefined) {
    const eprefix= red_bold('Error')
    const emsg= red_light(error?.message || '')
    console.log(`${eprefix}: ${emsg}`)
  }  
}

function _log_help(action, usage, extra, error= undefined) {
  const prefix= _bl('arredemo')
  const saction = _bb(action)

  let text= `
  ${prefix} ${saction} 

  Usage:

  ${usage}
  `
  if (extra) {
  text+= `
  ${extra}
  `
  }

  _log_text(text)
  _log_err(error)
}

const _buildUsage = `\t${_bl('npx arredemo')} ${_bb('build')} ${_bl('[force]')}`
const _helpUsage = `\t${_bl('npx arredemo')} ${_bb('help')}`
const _versionUsage = `\t${_bl('npx arredemo')} ${_bb('version')}`

function buildHelp(pkgPath, error= undefined) {
  const usage= _buildUsage
  const extra = `
  Run this command to build your library's docs&demo site.

  It will guide you through the several steps.`
  _log_help('build', usage, extra)
  _log_err(error)
}

function helpHelp(pkgPath, error= undefined) {
  const usage= _helpUsage
  _log_help('help', usage, '')
  _log_err(error)  
}


function versionHelp(pkgPath, error= undefined) {
  const usage= _versionUsage
  _log_help('version', usage, '')
  _log_err(error)  
}

function globalHelp(error= undefined, extra= undefined) {
  if (error) {
  _log_err(error)

  if (extra) {
  _log_text(extra)
  }
}

const text= [
  "arredemo's available commands",
  '\n',
  _buildUsage,
  '\n',
  _helpUsage,
  '\n',
  _versionUsage
  ].join('\n')

  _log_text(text)
}


export {
  buildHelp,
  helpHelp,
  versionHelp,
  globalHelp
}
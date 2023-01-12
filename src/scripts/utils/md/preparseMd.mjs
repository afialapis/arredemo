//import {name} from '../../../conf'

const LEVEL1_TAG= 'section'
const LEVEL2_TAG= 'article'


const _groupBySections= (lines) => {

  const output= []
  
  let openedl1= false, openedl2= false
 
  for (const line of lines) {
    if (line.indexOf('#')==0) {
      
      if (line.indexOf('# ')==0) {
        if (openedl2) {
          output.push(`</${LEVEL2_TAG}>`)
          openedl2= false
        }
        if (openedl1) {
          output.push(`</${LEVEL1_TAG}>`)
        }
        output.push(`<${LEVEL1_TAG}>`)
        openedl1= true
      }

      if (line.indexOf('## ')==0) {
        if (openedl2) {
          output.push(`</${LEVEL2_TAG}>`)
        }        
        output.push(`<${LEVEL2_TAG}>`)
        openedl2= true
      }
    }
    /*
    const s= "`"
    output.push(line.replace(` ${name} `, ` <span class="afi-package-name">${name}</span> `)
                    .replace(`${s}${name}${s}`, `${s}<span class="afi-package-name">${name}</span>${s}`)
                    .replace(` ${name}-`, ` <span class="afi-package-name">${name}</span>-`))
    */
   output.push(line)
  }
  return output

}

/*
const _wrapImages= (lines) => {
  const output= []
   
  for (const line of lines) {
    let append= []

    if (line.indexOf('[!')==0 || line.indexOf('!')==0) {
      let className= ''
      if (line.indexOf('logo')>=0 && line.indexOf('png')>=0) {
        className= 'logo'
      } else if (line.indexOf('badge.fury.io')>=0 || line.indexOf('david-dm')>=0 || line.indexOf('img.shields.io')>=0) {
        className= 'badge'
      }
      append= [
        `<span class="${className}">`,
        line,
        '</span>'
      ]
    } else {
      append= [line]
    }
    append.map(a => output.push(a))
  }
  
  return output        
}
*/

const _trimImages= (lines) => {
  const output= []
   
  for (const line of lines) {
    let append= []

    if (line.indexOf('[!')<0 && line.indexOf('!')<0) {
      append= [line]
    }
    append.map(a => output.push(a))
  }
  
  return output        
}



const preparseMd= (md) => {
  let lines= md.split('\n')

  lines= _groupBySections(lines)
  lines=  _trimImages(lines) 
  
  return lines.join('\n')

}

export default preparseMd
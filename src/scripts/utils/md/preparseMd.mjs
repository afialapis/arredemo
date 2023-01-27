const _removeDoubledEmptyLines = (md) => {
  const findReg= new RegExp('\n\n\n', 'g')
  const replWith= ' \n\n'
  return md.replace(findReg, replWith)
}
const _groupBySections= (lines, h1ChTag= 'section', h2ChTag= 'article') => {
  /**
   * converts:
   * 
   * ```
   * # Head 1
   * Text here
   * 
   * ## Head 2
   * More text here
   * ```
   * 
   * To:
   * 
   * 
   * ```
   * # Head 1
   * <section>
   * Text here
   * 
   * ## Head 2
   * <article>
   * More text here
   * </article>
   * </section>
   * ``` 
   */
  const output= []
  
  let openedl1= false, openedl2= false
 
  for (const line of lines) {
    if (line.indexOf('#')==0) {
      
      if (line.indexOf('# ')==0) {
        if (openedl2) {
          output.push(`</${h2ChTag}>`)
          openedl2= false
        }
        if (openedl1) {
          output.push(`</${h1ChTag}>`)
        }
        output.push(`<${h1ChTag}>`)
        openedl1= true
      }

      if (line.indexOf('## ')==0) {
        if (openedl2) {
          output.push(`</${h2ChTag}>`)
        }        
        output.push(`<${h2ChTag}>`)
        openedl2= true
      }
    }
    output.push(line)
  }
  return output

}

const _removeBadgesAndLogo= (lines) => {
  /**
   * Remove logos and famous badges from the readme
   *  Like this ones:
   * 
   * ```
   * ![reactstrap-date-picker logo](https://reactstrap-date-picker.afialapis.com/assets/images/logo/reactstrap_date_picker_name.png)   * [![NPM Version](https://badge.fury.io/js/reactstrap-date-picker.svg)](https://www.npmjs.com/package/reactstrap-date-picker)
   * [![Dependency Status](https://david-dm.org/afialapis/reactstrap-date-picker.svg)](https://david-dm.org/afialapis/reactstrap-date-picker)
   * [![NPM Downloads](https://img.shields.io/npm/dm/reactstrap-date-picker.svg?style=flat)](https://www.npmjs.com/package/reactstrap-date-picker)
   * ```
   */
  const unwantedWords= [
    ['logo', '.png'],
    ['badge.fury.io'],
    ['david-dm'],
    ['img.shields.io']
  ]
  const output= []
   
  for (const line of lines) {
    let append=true

    const seemsALine= (line.indexOf('[!')==0 || line.indexOf('!')==0)
    if (seemsALine) {
      unwantedWords.map((group) => {
        const matches= Math.min(
          ...group.map(w => line.indexOf(w)>=0)
        )
        if (matches) {
          append= false
        }
      })
    }
    if (append) {
      output.push(line)
    }
  }
  
  return output        
}

const _removeSummaryTags= (lines, keepSummary) => {
  /**
   * converts:
   * 
   * ```
   * <details>
   * <summary>
   * Some summary text resume
   * </summary>
   * Bla bla bla bla bla bla
   * </details> 
   * ```
   * 
   * to:
   * 
   * ```
   * Some summary text resume   # This line only if keepSummary=True
   * Bla bla bla bla bla bla
   * ```
   */
  const output= []
  let inSummary= false
  
  for (const l of lines) {
    let append= true
    if (l.indexOf('<details>')>=0 || l.indexOf('</details>')>=0) {
      append= false
    } else if (l.indexOf('<summary>')>=0) {
      append= false
      inSummary= true
    } else if (l.indexOf('</summary>')>=0) {
      append= false
      inSummary= false
    }
    
    if (inSummary) {
      if (keepSummary) {
        output.push(l)
      }
    } else if (append) {
      output.push(l)
    }
  }
  return output
}


const preparseMd= (md, packageName, arreConfig) => {
  let parsed= _removeDoubledEmptyLines(md)

  let lines= parsed.split('\n')

  lines= _groupBySections(lines)
  lines=  _removeBadgesAndLogo(lines) 
  if (arreConfig.md_strip_details_tag) {
    lines= _removeSummaryTags(lines, arreConfig.md_keep_summary_content) 
  }

  
  return lines.join('\n')

}

export default preparseMd




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


const _removeImages= (lines) => {
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
*/


// const _wrapPackageName= (md, packageName) => {
//   /**
//    * converts:
//    * 
//    * ```
//    * Text text text packageName text text text
//    * ```
//    * 
//    * To:
//    * 
//    * 
//    * ```
//    * Text text text <span class="package-name">packageName</span> text text text
//    * ``` 
//    */
//   //  const _replIfSurroundedBy = (str, sep1, sep2= undefined) => {
//   //    const find= `${sep1}${packageName}${sep2 || sep1}`
//   //    const regFind = new RegExp(find, 'g')
//   //    const replWith= `${sep1}<span class="package-name">${packageName}</span>${sep2 || sep1}`
//   //    return str.replace(regFind, replWith)
//   //  }
//   //
//   //  let out= _replIfSurroundedBy(md, ' ')
//   //  out= _replIfSurroundedBy(out, '`')
//   //  out= _replIfSurroundedBy(out, '"')
//   //  out= _replIfSurroundedBy(out, "'")
//   //  out= _replIfSurroundedBy(out, ' ', '.')
//   //  out= _replIfSurroundedBy(out, ' ', ',')
//   //  out= _replIfSurroundedBy(out, ' ', "'")
//   //  out= _replIfSurroundedBy(out, '>', "<")
// 
//   // return out
// 
// 
//   const regFind = new RegExp(packageName, 'g')
//   const replWith= `<i >${packageName}</i>`
//   return md.replace(regFind, replWith)
// }
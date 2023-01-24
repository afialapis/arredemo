// slugify function from markdown-to-jsx (not exposed by it)
// We need it out of the markdown-to-jsx scope, so we are exposing it here
//
// based on https://stackoverflow.com/a/18123682/1141611
// not complete, but probably good enough
function slugify(str) {
  let out= str
      .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
      .replace(/[çÇ]/g, 'c')
      .replace(/[ðÐ]/g, 'd')
      .replace(/[ÈÉÊËéèêë]/g, 'e')
      .replace(/[ÏïÎîÍíÌì]/g, 'i')
      .replace(/[Ññ]/g, 'n')
      .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
      .replace(/[ÜüÛûÚúÙù]/g, 'u')
      .replace(/[ŸÿÝý]/g, 'y')
      .replace(/[^a-z0-9- ]/gi, '')
      .replace(/ /gi, '-')
      .toLowerCase()
  
  if (out.match(/^\d/)) {
    out= `n_${out}`
  }
  return out
}



/**
 * Should be better tried with regex
 * 
 
 This does not work yet

 return s
        .replace(/<[^>]+>/g, '')  // remove html tags
  if (s.indexOf('<')==0) {
    s= s.replace('</','')
    s= s.replace('/>','')
    s= s.replace('<','')
    s= s.replace('>','')
    s= s.replace('&lt;','')
    s= s.replace('&gt;','')
  }

  with this:
    "<code><DatePicker /></code>"

 * 
 */
    function stripHtml(html){
      const temporalDivElement = document.createElement("div");
      temporalDivElement.innerHTML = html;
      const res= temporalDivElement.textContent || temporalDivElement.innerText || "";
      return res.trim()
    }


export {slugify, stripHtml}


import {useState, useEffect} from 'react'

const getStorageKey = (key) => {
  if (process.env.BROWSER) {
    return `${encodeURIComponent(window.location.pathname)}_${key || ''}`
  }
  return undefined
}

const getPersisted = async (key, defValue) => {
  if (process.env.BROWSER) {
    const k= getStorageKey(key)
    const v= localStorage.getItem(k)
    try {
      const p= JSON.parse(v)
      if (p!=undefined && p!=null) {
        return p
      }
    } catch(e) {}
  }
  const def= await defValue
  return def
}

const setPersisted = (key, value) => {
  if (process.env.BROWSER) {
    const k= getStorageKey(key)

    localStorage.setItem(k, JSON.stringify(value))
  }  
}


const useStoragedStateAsync = (defValue, key) => {

  const [value, setValue]= useState(undefined)

  useEffect(() => {
    const getPersistedAsync = async () => {
      const nValue= await getPersisted(key, defValue)
      setValue(nValue)
    }
    getPersistedAsync()
  }, [key, defValue])


  //
  // Returning and exposing setValue, we allow
  // to use functional setValue() too!
  //

  useEffect(() => {
    setPersisted(key, value)
  }, [key, value])


  return [value, setValue]
}

export default useStoragedStateAsync
import {useContext} from 'react'
import AppContext from './AppContext'

const useAppContext = ( )=> {
  const context= useContext(AppContext)
  return context
}


export default useAppContext
/*
 * Generate the App Context state
 * Variables:
 *    Context.Provider
 *    Context.Consumer
*/
import { createContext } from 'react'

const Context = createContext({ vmList: null })

export default Context

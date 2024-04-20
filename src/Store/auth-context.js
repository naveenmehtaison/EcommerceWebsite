import { createContext } from "react"
import React,{useContext} from "react"
const DataContext=React.createContext({
    additem:'',
    removeitem:'',
    arr:''

})
export default DataContext